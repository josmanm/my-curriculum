import SkillsCards from "../../components/cardSkills/SkillsCards";
import Skeleton from "../../components/skeleton/Skeleton";
import { Section } from "../../styles/general/styles";

function Skills() {
  return (
    <Section>
      <Skeleton title="Skills" />
      <SkillsCards />
    </Section>
  );
}

export default Skills;
