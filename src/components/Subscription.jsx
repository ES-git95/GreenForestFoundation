import React from "react";
import { AtSymbolIcon } from "@heroicons/react/solid";

export default function JoinUs() {
  return (
    <section id="Subscription" className="bg-green-900 text-slate-100 pt-10">
      <div className="container px-5 mx-auto xl:px-60 pb-10">
        <div className="text-center mb-10">
          <AtSymbolIcon className="mx-auto inline-block w-5 mb-4 text-slate-100" />
          <h2 className="text-4xl font-bold">Iscrizione</h2>
          <p className="text-lg mt-2">
            Scopri come puoi essere parte della nostra comunità e contribuire al nostro progetto.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-2/3 w-full">
            <h3 className="text-2xl font-bold mb-4">Procedura di Iscrizione:</h3>
            <ol className="list-decimal pl-5">
              <li>
              Scarica il modulo di iscrizione.&nbsp;(
                <a
                  href="./src/assets/1 Slide complete SP  AA 2021_2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  clicca qui
                </a>
                )
              </li>
              <li>Compila il modulo firmando l'autorizzazione al trattamento dei dati personali.</li>
              <li>Invia il modulo via mail.</li>
              {/* Aggiungi altri passaggi secondo necessità */}
            </ol>
            {/* Aggiungi ulteriori informazioni o immagini se necessario */}
          </div>
          <div className="lg:w-1/3 w-full mb-6 lg:pl-5 lg:ml-auto">
            <h3 className="text-2xl font-bold mt-4">Contatti per l'Iscrizione:</h3>
            <p>Email: greenforestfoundation@yahoo.com</p>
            <p>Telefono: +123 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
}
