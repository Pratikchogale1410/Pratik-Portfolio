import { HeroHome } from "./components/home/HeroHome";
import { Services } from "./components/home/Services";
import { Statement } from "./components/home/Statement";
import { Impact } from "./components/home/Impact";
import { Work } from "./components/home/Work";
import { Experience } from "./components/home/Experience";
import { Technology } from "./components/home/Technology";
import { Process } from "./components/home/Process";
import { ZoomReveal } from "./components/home/ZoomReveal";
import { Contact } from "./components/home/Contact";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <Services />
      <Statement />
      <Impact />
      <Work />
      <Experience />
      <Technology />
      <Process />
      <ZoomReveal />
      <Contact />
    </main>
  );
}
