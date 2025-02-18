import React from "react";

export default function Menu() {
  return (
    <div className="w-full h-12 bg-purple-400  flex items-center justify-end">
      <div className="flex">
        <h1 className="text-2xl text-white opacity-100 p-2 hover:text-orange-300">
          Sobre
        </h1>
        <h1 className="text-2xl text-black opacity-80 p-2 hover:text-orange-300">
          Projetos
        </h1>
        <h1 className="text-2xl text-black opacity-80 p-2 hover:text-orange-300">
          Tecnologias
        </h1>
      </div>
    </div>
  );
}
