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
        className="z-50 absolute top-20 left-2 bg-white text-sm p-2 rounded text-orange-400 sm:text-3xl
  "
      >
        Cosme Teixera da Silva
      </h1>
      <h1
        className="z-50 absolute top-40 left-12 bg-orange-500 text-sm sm:text-3xl p-2 rounded text-white
  "
      >
        cosme.teixeira@gmail.com
      </h1>
    </div>
  );
}
