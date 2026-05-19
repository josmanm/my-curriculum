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

function CardEducation() {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    getStudies().then(setStudies);
  }, []);

  return (
    <CardEducationContainer>
      {studies.map((item, index) => (
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
