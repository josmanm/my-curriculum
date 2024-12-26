import { useEffect, useState } from "react";
import { getExperiences } from "../../services/experiencesServices";
import { CardExperienceContainer, CardExperienceItem, CardExperienceLogo, DivTicket } from "./cardExperiencesStyles";
import { CardEducationDivImg } from "../cardEducation/cardEducationStyle";

const data = [
  {
    id : 1,
    name : 'INDRA',
    logo : 'https://brandemia.org/sites/default/files/inline/images/indra_logo-antes.jpg', 
    date: "Feb-2024 - 2024",
    status: "Joven Profesional",
    type: "Profesional",
    city: "Popayán",
    country: "Colombia",
  },
  {
    id : 2,
    name : 'INDRA',
    logo : 'https://brandemia.org/sites/default/files/inline/images/indra_logo-antes.jpg', 
    date: "Feb-2024 - 2024",
    status: "En curso",
    type: "Profesional",
    city: "Popayán",
    country: "Colombia",
  },
  {
    id : 3,
    name : 'INDRA',
    logo : 'https://brandemia.org/sites/default/files/inline/images/indra_logo-antes.jpg', 
    date: "2017 - 2024",
    status: "En curso",
    type: "Profesional",
    city: "Popayán",
    country: "Colombia",
  }
  
]

function CardExperiences() {
  const [experiencnces, setExperiencnces] = useState([]);

  useEffect(() => {
    getExperiences().then((response) => {
      setExperiencnces(response);
      console.log(response);
    });
  }, []);
  return (
    <CardExperienceContainer>
      {data.map((item, index) => (
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