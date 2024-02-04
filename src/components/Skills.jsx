import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
//import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900">
      <div className="container px-5 py-10 mx-auto ">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-slate-100 mb-4">
            I Rifugi
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {/*skills.map((skill) => (
            <div key={skill} className="p-8 sm:w-1/2 w-full">
              <div className="bg-green-700 rounded-full flex items-center p-10 h-full">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))*/}
        </div>
        <p className="lg:w-2/3 mx-auto text-center leading-relaxed text-base text-slate-100">
        Un piccolo rifugio antiatomico è solitamente progettato come un ambiente sotterraneo o rinforzato, con lo scopo di fornire protezione durante eventi catastrofici. La sua struttura è solida e compatta, con pareti spesse pensate per ridurre l'esposizione alle radiazioni. Il rifugio include sistemi di ventilazione e filtri per purificare l'aria contaminata, riserve di cibo e acqua a lunga conservazione, e spazi adatti per ospitare le persone in modo confortevole per un periodo prolungato. L'obiettivo principale è garantire la sicurezza e la sopravvivenza durante situazioni di emergenza.
          </p>
      </div>
    </section>
  );
}
