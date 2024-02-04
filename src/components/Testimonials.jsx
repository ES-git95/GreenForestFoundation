// src/components/Testimonials


import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
// ...

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-slate-100 mb-12">
          Sponsorizzazioni
        </h1>
        <div className="flex flex-wrap m-4 items-center justify-center"> {/* Modificato qui */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 w-80 mx-auto ">
                <img
                  src={testimonial.image}

                  className="w-60 h-20 object-cover mx-auto mb-4" // Aggiunto qui
                />
              </div>
            </div>
          ))}
        </div>

        <div className=" border-t border-gray-300 py-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-4">Associazione Green Forest Foundation</h3>
          <p className="mb-2">Indirizzo: Via Giovanni Battista Sammartini, 5, 20121 Milano</p>
          <p className="mb-2">Email: info@associazione.com</p>
          <p className="mb-2">Telefono: +39 328 8048679</p>
          <p>Partita IVA: 97959080157</p>
        </div>
      </div>

      </div>
    </section>
  );
}
