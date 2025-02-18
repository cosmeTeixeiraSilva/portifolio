import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative top-0 left-0  h-[500px]">
      <Image
        src="/hero.png"
        alt="LogoHero"
        fill
        quality={100}
        priority
        className="object-cover z-10"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 10vw"
      />

      <h1
        className="z-50 absolute top-4 left-2 bg-[#454545] text-sm p-1 rounded text-orange-400 sm:text-3xl
  "
      >
        Cosme Teixeira da Silva
      </h1>
      <h1
        className="z-50 absolute bottom-2 right-2 bg-[#454545] text-sm sm:text-3xl p-1 rounded text-white
  "
      >
        cosme.teixeira@gmail.com
      </h1>
    </div>
  );
}
