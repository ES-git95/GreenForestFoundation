import React from "react";

export default function JoinUs() {
  return (
    <section id="JoinUs" className="bg-green-800 text-slate-100 pt-10">
      <div className="container px-5 pt-16 pb-5 mx-auto xl:px-60">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Unisciti a Noi</h2>
          <p className="text-lg mt-2">
            Scopri come puoi essere parte della nostra comunità e contribuire al nostro progetto.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="lg:w-1/2 w-full lg:pr-5 mb-6">
            <p className="mb-4 mt-4 text-center">
              L'albero è la base della vita sulla Terra attraverso il quale viene generata la catena vitale che sostiene il regno animale e vegetale sul nostro Pianeta. Unisciti a noi e prova una nuova esperienza di tutela attiva della natura attraverso il semplice gesto di cura e salvaguardia di un albero; che diverrà il tuo amico discreto per la vita
            </p>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-5">
            {/* Add your images here */}
            <div className="flex justify-center space-x-4">
              <img
                src="../src/assets/pexels-arnie-chou-1001430.jpg"
                alt="Join Us 1"
                className="rounded-lg h-64 w-auto object-cover"
              />
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
