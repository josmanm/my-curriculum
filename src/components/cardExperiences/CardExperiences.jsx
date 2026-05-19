import { useEffect, useState } from "react";
import { getExperiences } from "../../services/experiencesServices";
import { CardExperienceContainer, CardExperienceItem, CardExperienceLogo } from "./cardExperiencesStyles";
import { CardEducationDivImg } from "../cardEducation/cardEducationStyle";

function CardExperiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperiences().then(setExperiences);
  }, []);

  return (
    <CardExperienceContainer>
      {experiences.map((item, index) => (
        <CardExperienceItem
          key={item.id}
          style={{ alignSelf: index % 2 === 1 ? "flex-end" : "flex-start" }}
        >
        <CardEducationDivImg>
          <CardExperienceLogo src={item.logo} alt={item.name} />
        </CardEducationDivImg>
        <h1>{item.name}</h1>
        <p>{item.date}</p>
        <p>{item.status}</p>
        </CardExperienceItem>
      ))
      }
    </CardExperienceContainer>
  )
}

export default CardExperiences
