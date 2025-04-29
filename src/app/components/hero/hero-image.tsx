import Image from "next/image";

export function HeroImage() {
  return (
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src="/illustration-hero.svg"
        alt="imagem hero"
        width={500}
        height={400}
      />
    </div>
  );
}
