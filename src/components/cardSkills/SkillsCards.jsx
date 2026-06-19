import { useEffect, useState } from "react";
import { getTechnologies } from "../../services/technologiesServices";
import { DivCard, DivSkills, SkillName } from "./CardSkillsStyle";

function SkillsCards() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTechnologies().then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <DivSkills>
        {Array.from({ length: 9 }).map((_, i) => (
          <DivCard key={i} style={{ opacity: 0.4 }} />
        ))}
      </DivSkills>
    );
  }

  return (
    <DivSkills>
      {technologies.map((item) => (
        <DivCard key={item.name}>
          <SkillName>{item.name}</SkillName>
        </DivCard>
      ))}
    </DivSkills>
  );
}

export default SkillsCards;