import { CardSkills } from "./CardSkills";
import { skillsArray, Skill } from '../data/index';

export const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center text-bodyColor mb-24 py-10"
    id="Habilidades">
      <h1 className="text-3xl font-bold mb-20">
        Habilidades
      </h1>
      <main className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 grid-flow-rows gap-x-4  gap-y-5 justify-center">
      {skillsArray.map((skill: Skill) => (
        <CardSkills id={skill.id} title={skill.title} logo={skill.logo} description={skill.description} experience={skill.experience}/>
      ))}
      </main>
    </div>
  );
};
