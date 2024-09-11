import { useState } from "react";
import { CardProjects } from "./CardProjects";
import { projectsArray, Project } from "../data/index";
import { motion } from "framer-motion";

export const Portfolio = () => {
    const [currentProjectCard, setCurrentProjectCard] = useState<Project>(
        {
            id: 1,
            title: 'Music Legends',
            banner: 'img/projects/musiclegends.png',
            logos: [
              '/img/logos/cdn-reactjs.svg',
              '/img/logos/cdn-tailwind-css.svg',
              '/img/logos/cdn-typescript.svg',
              '/img/logos/cdn-figma.svg'
            ],
            links: [
              'https://musiclegends.netlify.app',
              'https://github.com/VitoorVictor/MusicLegends',
            ]
        }
    );
    const [projectCardActive, setProjectCardActive] = useState(1)

    const handleClickTitle = (id:number) => {
        const projectId = id; 
        const project = projectsArray.find(function(project){
            return project.id === projectId;
        });

        if (project) {
            setProjectCardActive(project.id);
            return setCurrentProjectCard(project);
        }
    }

    return(
        <div className="flex flex-col items-center text-white w-full py-40 max-h-screen bg-bodyColor"
        id="Portfólio">
            <h1 className="text-3xl font-bold p-2">
                Projetos
            </h1>

            <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-center w-full  lg:px-40 px-10">
                <div className="flex items-center justify-center w-full md:w-1/3 px-2">
                    <ul className="flex flex-row md:flex-col items-start justify-start p-0 md:p-4 overflow-x-auto space-x-4 md:space-x-0">
                        {projectsArray.map((project: Project) => (
                        <li
                            key={project.id}
                            className={`cursor-pointer text-sm md:text-lg p-2 md:w-48 md:mb-4 hover:text-gray-500 border-b text-center md:text-start flex-shrink-0
                                ${ projectCardActive === project.id ? "text-yellow-500" : "text-white"}`}
                            onClick={() => handleClickTitle(project.id)}
                        >
                            <p>{project.title}</p>
                        </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-2/3">
                    <motion.div
                        key={currentProjectCard.id}
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} 
                    >
                        <CardProjects dataCardProject={currentProjectCard}/>
                    </motion.div>
                </div>
            </div>
            
        </div>
    );
};  