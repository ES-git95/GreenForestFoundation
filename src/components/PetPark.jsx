import React from "react";

export default function JoinUs() {
  const sectionStyle = {
    height: "100vh", // Imposta l'altezza al 100% della viewport //style={sectionStyle}
  };

  return (
    <section id="PetPark" className="bg-green-800 text-slate-100 pt-10">
      <div className="container px-5 pt-16 mx-auto xl:px-60">
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center">
            <img
              src="../src/assets/logo.jpeg"  // Sostituisci con il percorso del tuo logo
              alt="Logo"
              className="h-28 w-auto"
            />
            <h2 className="text-4xl text-center font-bold ml-96 ">PetPark</h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-1/2 w-full lg:pr-5 mb-6 text-slate-100">
            <p className="mb-4">
            Il Pet Park, ideato da Valeria Mondello, creatrice di Sky Sport e produttrice di "Adrenalinix" su Sky Sport Arena, è un progetto completo dedicato al benessere degli animali. Offre un parco divertimenti per gli animali in difficoltà, servizi di asili e PET terapy per bambini, anziani e chiunque stia affrontando un percorso di recupero. Una missione d'amore supportata da un solido progetto di marketing per garantirne l'autosufficienza. 
            <br/> Benvenuti al Pet Park, il paradiso degli animali.
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
            {/* Prima coppia di immagini */}
            <div className="flex justify-center space-x-4">
              <img
                src="../src/assets/horse.jpeg"
                alt="Join Us 1"
                className="rounded-lg h-40 w-40 object-cover"
              />
              <img
                src="../src/assets/dog.jpeg"
                alt="Join Us 2"
                className="rounded-lg h-40 w-40 object-cover"
              />
            </div>
            {/* Seconda coppia di immagini */}
            <div className="flex justify-center space-x-4 mt-4 mb-5">
              <img
                src="../src/assets/dog2.jpeg"
                alt="Join Us 3"
                className="rounded-lg h-40 w-40 object-cover"
              />
              <img
                src="../src/assets/dog3.jpeg"
                alt="Join Us 4"
                className="rounded-lg h-40 w-40 object-cover"
              />
            </div>
            {/* Aggiungi altre immagini se necessario */}
          </div>
        </div>
      </div>
    </section>
  );
}
