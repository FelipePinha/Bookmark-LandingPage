import { HeroImage } from "./hero-image";
import { HeroText } from "./hero-text";

export function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center mt-16">
      <HeroText />
      <HeroImage />
    </section>
  );
}
