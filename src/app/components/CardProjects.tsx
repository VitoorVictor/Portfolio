import styles from "../styles/style.module.css";
import { Project } from "../data/index";

interface ICardProjectsProps {
  dataCardProject: Project; 
}

export const CardProjects: React.FC<ICardProjectsProps> = ({
  dataCardProject,}) => {
  const projectData = dataCardProject;
  return (
    <div
      className="container w-full flex justify-center  items-center rounded-xl"
    >
        <article
          className={`${styles.article} w-5/6 overflow-hidden relative flex rounded-xl group`}
        >
          <div className="absolute z-20 flex items-center">
            {projectData.logos.map((logo: string, index: number) => (
              <img
                src={logo}
                className={`opacity-0 group-hover:opacity-100 transition ease-in-out w-8 lg:w-16
                  ${
                    index === 0
                      ? "delay-100"
                      : index === 1
                      ? "delay-300"
                      : index === 2
                      ? "delay-500"
                      : "delay-700"
                  }`}
                alt="tecnologia"
              />
            ))}
          </div>

          <img
            src={projectData.banner}
            alt="image"
            className="rounded-xl transition duration-300 ease-in-out hover:brightness-75"
          />

          <div
            className={`${styles.data} w-5/6 md:w-3/4 py-1 lg:py-4 bg-bodyColor/70 border border-purpleColor rounded-lg absolute opacity-0 left-0 right-0 -bottom-36 mx-auto shadow-lg transition-opacity duration-1000 delay-1000`}
          >
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-end">
                <p className="text-sm md:text-md">
                  Hospedagem:
                  <a
                    href={projectData.links[0]}
                    className="group hover:underline mx-2"
                  >
                    Aqui
                  </a>
                </p>
                <p className="text-sm md:text-md">
                  Repositório Git:
                  <a
                    href={projectData.links[1]}
                    className="group hover:underline mx-2"
                  >
                    Aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>

    </div>
  );
};
