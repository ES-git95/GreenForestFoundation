import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";

export default function JoinUs() {
  return (
    <section id="Tesseramento" className="bg-green-800 text-slate-100 pt-11">
      <div className="container px-5 mx-auto xl:px-60">
        <div className="text-center mb-10">
        <BookOpenIcon className="mx-auto  inline-block w-5 mb-4 text-slate-100" />
          <h2 className="text-4xl font-bold">Tesseramento</h2>
          <p className="text-lg mt-2">
            Associati alla nostra fondazione e contribuisci a salvare il mondo con un semplice gesto.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full mb-8">
            <h3 className="text-2xl font-bold mb-4">Tipologia di tesseramento:</h3>
            <ol className="list-disc pl-5 ">
              <li><strong>SOCIO ORDINARIO:</strong> EURO 15,00 anno – sarai protagonista delle nostre attività periodiche di volontariato e tenuto al corrente di tutte le iniziative benefiche dell’associazione.</li>
              <br/>
              <li><strong>SOCIO ACTIVE:</strong> EURO 40,00 anno: oltre alle prerogative dell’affiliazione ordinaria potrai fare parte dei reparti specializzati della fondazione, frequentare corsi di aggiornamento di settore e cominciare a collaborare attivamente anche a livello decisionale operativo.</li>
              <br/>
              <li>
                <strong>SOCIO PRIME:</strong> EURO 500,00 anno: oltre alle prerogative delle due categorie sopra elencate al socio Prime ed i suoi familiari fino ad un massimo di 2 verrà riservato (diversamente se si tratta di un numero superiore bisognerà sottoscrivere un’ulteriore quota) un posto nei nostri 
                {/* Aggiunta dell'hyperlink con la classe text-blue-500 per colorare il testo di blu */}
                <a href="/Rifugi" className="text-blue-500 hover:underline"> rifugi antiatomici ARCA</a> dislocati in più parti del paese e costruiti per fini di sopravvivenza ad eventi catastrofici esterni.
              </li>
              {/* Aggiungi altri passaggi secondo necessità */}
            </ol>
            {/* Aggiungi ulteriori informazioni o immagini se necessario */}
          </div>
          <div className="w-full mb-8">
            <h3 className="text-2xl font-bold mt-4">Contatti di Tesseramento:</h3>
            <p>Email: greenforestfoundation@yahoo.com</p>
            <p>Telefono: +123 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
}
