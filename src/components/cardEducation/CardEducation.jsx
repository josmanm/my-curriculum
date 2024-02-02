import { useEffect, useState } from "react";
import {
  CardEducationContainer,
  CardEducationDivImg,
  CardEducationItem,
  CardEducationLogo,
  DivTicket,
  H1,
  P,
} from "./cardEducationStyle";
import { getStudies } from "../../services/studiesServices";
import TicketText from "../ticketText/TicketText";

const data = [
  {
    id: 1,
    name: "Universidad del Cauca",
    logo: "https://www.unicauca.edu.co/versionP/sites/default/files/images/Escudo_Universidad_cauca.png",
    description: "Ingeniería de Sistemas",
    date: "2017 - 2024",
    status: "En curso",
    type: "Profesional",
    city: "Popayán",
    country: "Colombia",
    link: "https://www.unicauca.edu.co/",
    tags: ["Python", "JavaScript", "HTML", "Java", "C#", "MYSQL", "ORACLE", "SQL SERVER"],
  },
  {
    id: 2,
    name: "Makaia",
    logo: "https://www.globalgiving.org/pfil/organ/11089/orglogo.png",
    description: "Desarrollo de Software frontend con React (280 horas)",
    date: "2023 - 2024",
    status: "Terminado",
    type: "Diplomado",
    city: "Medellin",
    country: "Colombia",
    link: "https://www.makaia.org/",
    tags: ["HTML", "JavaScript", "CSS", "Git", "React", "Sass", "Redux" , "Styled Components" , "Bootstrap", "Firebase",],
  },
  {
    id: 3,
    name: "Alcaldia de Cali",
    logo: "http://datos.cali.gov.co/uploads/group/2018-11-30-210856.259892EscudosAlcaldiaSecretariasYDepartamentos-16.jpg",
    description: "Fundamentos de programación para aplicaciones móviles (40 horas)",
    date: "2023",
    status: "Terminado",
    type: "Diplomado",
    city: "Cali",
    country: "Colombia",
    link: "https://www.makaia.org/",
    tags: [],
  },
  {
    id: 4,
    name: "Google Activate",
    logo: "https://www.argoshub.com/wp-content/uploads/2020/07/e9af7174c6c1f54e22a192320be2184d.png",
    description: "Desarrolador de app moviles (40 horas)",
    date: "2020",
    status: "Terminado",
    type: "Diplomado",
    city: "Cali",
    country: "Colombia",
    link: "https://www.makaia.org/",
    tags: ["Html", "Android Studio"],
  }
];
function CardEducation() {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    getStudies().then((response) => {
      setStudies(response);
      console.log(response);
    });
  }, []);
  return (
    <CardEducationContainer>
      {data.map((item, index) => (
        <CardEducationItem
          key={item.name}
          style={{ alignSelf: index % 2 === 1 ? "flex-end" : "flex-start" }}
        >
          <CardEducationDivImg>
            <CardEducationLogo src={item.logo} alt={item.name} />
          </CardEducationDivImg>
          <H1>{item.name}</H1>
          <P>{item.description}</P>
          <P>{item.date}</P>
          <DivTicket>
            {item.tags.map((tag, index) => {
              return <TicketText key={index} title={tag} text={tag} />;
            })}
          </DivTicket>
        </CardEducationItem>
      ))}
    </CardEducationContainer>
  );
}

export default CardEducation;
