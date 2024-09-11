import React from "react";
import styles from "../styles/style.module.css";

interface ICardSkillsProps {
    id: number
    title: string,
    logo: string,
    description: string[],
    experience: string,
}

export const CardSkills:React.FC<ICardSkillsProps> = ({id, title, logo, description, experience}) =>{
    return(
        <div key={id} className={`${styles.container} h-36 w-36 md:h-52 md:w-52 relative hover:cursor-pointer`}>
          <div
            className={`${styles.card} bg-bodyColor rounded-t-xl relative w-full h-full`}
          >
            <div
              className={`${styles.front} absolute w-full h-full flex flex-col items-center text-white border-b-8 py-4`}
              style={{
                borderImage: "linear-gradient(to left, #6366f1, #312e81) 1",
              }}
            >
              <div className="title md:w-40 w-32  border-b-2 border-indigo-800 text-center">
                <h1 className="mb-2">{title}</h1>
              </div>
              <div className="main flex justify-center items-center">
                <img src={logo} alt="" className="w-1/2 md:w-full"/>
              </div>
            </div>
            <div
              className={`${styles.back} absolute w-full h-full flex flex-col items-center justify-between text-white py-2`}
            >
              <div className="description md:w-48 w-32 overflow-y-auto text-center">
                {description.map((desc:string, index:number) => (
                  <p key={index} className="mb-1 text-sm">
                  {desc}
                </p>
                ))}
              </div>
              <div className="experience flex flex-col items-center justify-center w-5/6 mt-4">
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className={`bg-gradient-to-r from-blue-600 to-violet-600 h-2 rounded-full ${experience}`}></div>
                </div>

                <div className="w-full flex justify-between mt-2 text-sm">
                    <p>0%</p>
                    <p>100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )

}