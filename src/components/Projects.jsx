import { ArrowDownIcon, CursorClickIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { projects } from "../data";
import { HashLink as Link } from 'react-router-hash-link';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="text-gray-300 bg-green-800 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ArrowDownIcon className="mx-auto inline-block w-10 mb-4 text-slate-100" />
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-slate-100">
            Il Progetto
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-100">
          Esplora i nostri progetti per un impatto reale. Insieme, facciamo la differenza, passo dopo passo.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {projects.map((project, index) => (
            <div
              key={project.image}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 relative">
              <div
                className="cursor-pointer relative group"
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}>
                <h2 className="text-2xl font-medium text-amber-200 mb-2">
                  {project.subtitle}
                </h2>
                <div className="relative overflow-hidden">
                  <img
                    alt="gallery"
                    className="w-full h-96 object-cover object-center mb-2"
                    src={project.image}
                  />
                  {hoveredProject === project && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 group-hover:bg-opacity-80">
                      <div className="text-center p-4">
                        <h1 className="text-lg font-medium text-white mb-3">
                          {project.title}
                        </h1>
                        <p className="text-md leading-relaxed">{project.description}</p>
                        {index === projects.length - 1 && (
                          <button className="text-white bg-green-600  hover:bg-gray-700 py-2 px-4 mt-4 rounded">
                            <Link to="/Contacts#Subscription" >Contattaci</Link>
                          </button>
                        )}
                        {index === projects.length - 2 && (
                          <button className="text-white bg-green-600  hover:bg-gray-700 py-2 px-4 mt-4 rounded">
                            <Link to="/PetPark" >PetPark</Link>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {hoveredProject !== project && (
                  <div className="absolute bottom-2 right-2 -mr-4 -mb-4">
                    {/* Adjusted margins to move the icon outside of the image */}
                    <CursorClickIcon className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
