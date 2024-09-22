import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import { ProjectsData } from "../data/ProjectsData";

const Projects = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(ProjectsData);
  }, []);

  if (!data)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-500">
        Loading...
      </div>
    );

  return (
    <HeroSection>
      <div
        name="projects"
        className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
      >
        {data.map((project, index) => (
          <div
            key={index}
            className="w-[350px] h-[350px] relative shadow-xl overflow-hidden rounded-lg duration-300 border-2"
          >
            <h2 className="absolute top-2 left-2 text-xl font-extrabold text-white z-10">
              {project.name}
            </h2>
            <img
              src={project.image}
              alt={project.name}
              className="object-contain w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-center text-lg font-bold mt-2">
                Tech stack:{" "}
                <span className="font-normal">{project.techstack}</span>
              </p>
              <p className="text-center text-base font-medium mt-2">
                {project.description}
              </p>
            </div>
            <div className="flex items-center justify-between absolute bottom-4 left-4 right-4">
              <a
                href={project.github}
                className="text-center underline font-bold text-white"
              >
                View Code🔗
              </a>
              <button className="bg-[#ff7b9e] w-32 rounded-md font-medium px-4 py-2">
                <a href={project.live}>Live</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </HeroSection>
  );
};

export default Projects;
