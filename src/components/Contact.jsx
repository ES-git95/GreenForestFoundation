import React from "react";
import { GlobeAltIcon } from "@heroicons/react/solid";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-green-900 text-slate-100">
      <div className="container px-5 pb-20 mx-auto flex sm:flex-nowrap flex-wrap justify-center pt-10">
        <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden p-2">
        <div className="text-center mb-10">
        <GlobeAltIcon className="mx-auto  inline-block w-5 mb-4 text-slate-100" />
          <h2 className="text-4xl font-bold">Dove Siamo</h2>
          <p className="text-lg mt-2">
            Ci troviamo nel mezzo della Val Chisone, circondati da una fortezza di montagne.
          </p>
        </div>
          <div
            className="w-full h-96"
            style={{
              position: "relative",
              filter: "opacity(0.7)",
              overflow: "hidden",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              title="map"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11285.24219922618!2d7.120214675423989!3d44.99831516049328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789cca1499bb427%3A0xbe68e9d160c6fa7a!2sVal%20Chisone!5e0!3m2!1sit!2sit!4v1704631993023!5m2!1sit!2sit"

            />
          </div>
        </div>
      </div>
    </section>
  );
}
