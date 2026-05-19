import { useEffect, useState } from "react";
import { getTechnologies } from "../../services/technologiesServices";
import { Degradado, DivCard, DivSkills, H1, Img, LinkSkills } from "./CardSkillsStyle";

function SkillsCards() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getTechnologies().then(setTechnologies);
  }, []);

  return (
    <DivSkills>
      {technologies.map((item) => (
        <LinkSkills key={item.name} to={`/${item.name}`}>
          <DivCard>
            <H1>{item.name}</H1>
            <Degradado />
            <Img src={item.logo} alt={item.name} />
          </DivCard>
        </LinkSkills>
      ))}
    </DivSkills>
  );
}

export default SkillsCards;
