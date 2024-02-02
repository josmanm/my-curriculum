import CardSkills from "../../components/cardSkills/cardSkills";
import Skeleton from "../../components/skeleton/Skeleton";
import { Section } from "../../styles/general/styles";


function Skills() {
  return (
    <Section>
        <Skeleton title='Skills'/>
        <CardSkills/>
    </Section>
  )
}

export default Skills