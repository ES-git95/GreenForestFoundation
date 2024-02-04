import React from "react";

export default function JoinUs() {
  return (
    <section id="Comuni" className="bg-green-800 text-slate-100 pt-10 ">
      <div className="container px-5 pt-16 mx-auto xl:px-60">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Per i Comuni</h2>
          <p className="text-lg mt-2">
            Scopri come puoi essere parte della nostra comunità e contribuire al nostro progetto.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-1/2 w-full lg:pr-5 mb-6">
            <p className="mb-4">
            Attraverso il nostro volontariato  collaboriamo con i Comuni Italiani al fine di gestire la cura e la potatura delle piante site sulle aree comunali anche di grandi dimensioni. Tutti gli interventi SONO GRATUITI (materiali di consumo a parte) e vengono progettati ed approvati attraverso una visualizzazione in rendering che ne evidenzia gli aspetti essenziali e questo prima di eseguire l’intervento, il tutto in condivisione con i responsabili delle Giunte Comunali interessate.
            </p>
            <p>
            Sei un Comune? Contattaci! Ti proporremo delle soluzioni alla problematica della manutenzione delle piante del tuo territorio.
            </p>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-5">
            {/* Add your images here */}
            <div className="flex justify-center space-x-4">
              <img
                src="../src/assets/Screenshot 2024-01-05 162200.jpg"
                alt="Join Us 1"
                className="rounded-lg h-60 w-auto object-cover"
              />
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 mx-auto xl:px-60 pb-72">
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-1/2 w-full lg:pr-5 mb-6">
          </div>
          <div className="lg:w-1/3 w-full mb-6 lg:pl-5 lg:ml-auto">
            <h3 className="text-2xl font-bold mt-4">Contatti per l'Iscrizione:</h3>
            <p>Email: greenforestfoundation@yahoo.com</p>
            <p>Telefono: +39 328 8048679</p>
          </div>
        </div>
      </div>
      </section>
  );
}

