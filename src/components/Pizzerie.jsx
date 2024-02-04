import React from "react";
import { pizzerie } from "../data";

export default function Pizzerie() {
  return (
    <section id="Pizzerie" className="text-slate-100 bg-green-800 body-font ">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-slate-100">
            Un impatto concreto
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Le pizzerie sono parte della nostra filiera sostenibilie. 
            Le puoi identificare dall'adesivo della nostra associazione da loro esposto.
          </p>
        </div>
        <div className="flex flex-wrap justify-center py-5  ">
          {pizzerie.map((pizzeria) => (
            <div key={pizzeria.title} className="w-full sm:w-1/2 p-20 md:w-1/2 lg:w-1/3 xl:w-1/4 ">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 bg-green-800 bg-opacity-75">
                    <h1 className="text-2xl font-medium text-white mb-3">
                      {pizzeria.title}
                    </h1>
                    <ul className="list-none list-inside leading-relaxed">
                      <li>{pizzeria.address}</li>
                      <li>{pizzeria.phone}</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
