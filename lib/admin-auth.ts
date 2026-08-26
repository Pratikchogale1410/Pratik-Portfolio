import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 12;

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET or ADMIN_PASSWORD is not configured");
  }
  return secret;
}

function bufferToHex(buf: Uint8Array): string {
  return Array.from(buf).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function sign(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSessionSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return bufferToHex(new Uint8Array(sig));
}

export async function createAdminSessionToken() {
  const nonce = bufferToHex(crypto.getRandomValues(new Uint8Array(16)));
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `admin:${exp}:${nonce}`;
  return `${payload}.${await sign(payload)}`;
}

async function verifySignature(payload: string, signature: string): Promise<boolean> {
  try {
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(getSessionSecret()),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"],
    );
    const sigBytes = new Uint8Array(
      signature.match(/.{2}/g)?.map((byte) => parseInt(byte, 16)) ?? [],
    );
    const data = new TextEncoder().encode(payload);
    return await crypto.subtle.verify("HMAC", key, sigBytes, data);
  } catch {
    return false;
  }
}

export async function verifyAdminSessionToken(token?: string | null) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const valid = await verifySignature(payload, signature);
  if (!valid) return false;

  const parts = payload.split(":");
  if (parts.length !== 3 || parts[0] !== "admin") return false;
  const exp = Number(parts[1]);
  if (!Number.isFinite(exp) || exp < Math.floor(Date.now() / 1000)) return false;
  return true;
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  return await verifyAdminSessionToken(jar.get(ADMIN_COOKIE)?.value);
}

export function getAdminCookieOptions() {
  return {
    httpOnly: true as const,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  };
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a[i] ^ b[i];
  }
  return diff === 0;
}

export async function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return { ok: false as const, error: "Admin password is not configured on the server." };
  }
  try {
    const a = new TextEncoder().encode(password);
    const b = new TextEncoder().encode(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) {
      return { ok: false as const, error: "Invalid password." };
    }
    return { ok: true as const };
  } catch {
    return { ok: false as const, error: "Invalid password." };
  }
}
