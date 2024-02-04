import React from "react";

export default function JoinUs() {
  const sectionStyle = {
    height: "100vh", // Imposta l'altezza al 100% della viewport //style={sectionStyle}
  };

  return (
    <section id="PetPark" className="bg-gray-900 text-slate-100 pt-10  pb-96" >
      <div className="container px-5 pt-16 mx-auto xl:px-60">
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center">
            <h2 className="text-4xl text-center font-bold ml-96 ">I Rifugi</h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-1/2 w-full lg:pr-5 mb-6 text-slate-100">
            <p className="mb-4">
            Un piccolo rifugio antiatomico è solitamente progettato come un ambiente sotterraneo o rinforzato, con lo scopo di fornire protezione durante eventi catastrofici. La sua struttura è solida e compatta, con pareti spesse pensate per ridurre l'esposizione alle radiazioni. Il rifugio include sistemi di ventilazione e filtri per purificare l'aria contaminata, riserve di cibo e acqua a lunga conservazione, e spazi adatti per ospitare le persone in modo confortevole per un periodo prolungato. L'obiettivo principale è garantire la sicurezza e la sopravvivenza durante situazioni di emergenza.
            </p>
            <p className="mb-4">
              Contattaci per avere più informazioni.
            </p>
            <a
              href="/Contacts#contact"
              className="inline-flex text-white bg-green-600 border-0 py-3 px-8 focus:outline-none hover:bg-green-700 rounded text-xl">
              Contattaci
            </a>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-5">
            {/* Add your images here */}
            <div className="flex justify-center space-x-4">
              <img
                src="../src/assets/ambiente base rifugio.png"
                alt="Join Us 2"
                className="rounded-lg h-52 w-auto object-cover"
              />
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
