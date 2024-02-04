import React from "react";

export default function About() {
  return (
    <section id="about" className="pb-10 pt-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('../src/assets/pexels-valentin-s-589802.jpg')` }}>
      <div className="container mx-auto flex pl-10 py-20 pr-10 md:flex-row flex-col items-center  xl:py-32">
        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-10 items-center text-center bg-black bg-opacity-70 p-8 rounded-md">
          <div className="flex items-center mb-5"> {/* Nuova div per contenere il titolo e l'immagine */}
            <img src="../src/assets/WhatsApp Image 2024-01-30 at 20.28.43.jpeg" alt="Green Forest Foundation" className="mr-8 w-28 h-28 rounded-full" /> {/* Aggiungi il percorso dell'immagine desiderata */}
            <h1 className="title-font sm:text-5xl text-3xl font-medium text-white">
              Green Forest Foundation
              <br className="hidden lg:inline-block" />
            </h1>
          </div>
          <p className="mb-0 mt-2 text-xl leading-relaxed text-white">
            Abbraccia il cambiamento, sostieni la natura. <br /> 
            Unisciti a noi nella missione di preservare il nostro pianeta, perché il futuro verde è nelle nostre mani.
          </p>
          <div className="flex justify-end ml-auto">
            <a
              href="/Contacts#contact"
              className="inline-flex text-white bg-green-600 border-0 py-3 px-8 focus:outline-none hover:bg-green-800 rounded text-xl">
              Contattaci
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-500 border-0 py-3 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-xl">
              Su di noi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
