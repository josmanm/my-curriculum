import { useEffect, useState } from "react"
import { Section, TitleH1 } from "../../styles/general/styles"
import { SkillsViewDiv, SkillsViewDiv2, SkillsViewHr } from "./SkillsViewStyle"
import { getTechnology } from "../../services/technologiesServices"
import { useParams } from "react-router-dom"

function SkillsView() {
  const { id } = useParams();
  const [technology, setTechnology] = useState(null);

  useEffect(() => {
    getTechnology(id).then(setTechnology);
  } , [id]);

  return (
    <Section>
      <SkillsViewDiv>
        <SkillsViewDiv2>
          <TitleH1> {technology?.name}</TitleH1>
        </SkillsViewDiv2>
        <SkillsViewHr/>
        <div>
          <p>{technology?.description}</p>
        </div>
        <SkillsViewHr/>
      </SkillsViewDiv>
    </Section>
  )
}

export default SkillsView
