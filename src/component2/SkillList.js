import Skills from "../pages2/Skills";
import { skillsData } from "../data/skillsData";

const SkillList = () => {
  return (
    <div>
      {skillsData.map((skill) => (
        <Skills
          key={skill.skill}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
};
export default SkillList;
