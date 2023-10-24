import { AppWrapper } from "@/wrapper";
import "./Skills.scss";
import SkillsBox from "./SkillsBox";
import { getSkills } from "@/sanity/sanity.utils";

const Skills = async () => {
  const skills = await getSkills();

  return (
    <div>
      <SkillsBox skills={skills} />
    </div>
  );
};

export default AppWrapper(Skills, "skills", "");
