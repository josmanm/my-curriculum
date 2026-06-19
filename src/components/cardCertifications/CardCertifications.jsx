import { useEffect, useState } from "react";
import { getCertifications } from "../../services/certificationsServices";
import {
  CardCertificationContainer,
  CardCertificationItem,
  DivTicket,
  H1,
  P,
} from "./cardCertificationStyle";
import TicketText from "../ticketText/TicketText";

function CardCertifications() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCertifications().then((data) => {
      setCertifications(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <CardCertificationContainer>
        {Array.from({ length: 3 }).map((_, i) => (
          <CardCertificationItem key={i} style={{ minHeight: '100px' }} />
        ))}
      </CardCertificationContainer>
    );
  }

  return (
    <CardCertificationContainer>
      {certifications.map((item, index) => (
        <CardCertificationItem
          key={item.id}
          style={{ alignSelf: index % 2 === 1 ? "flex-end" : "flex-start" }}
        >
          <H1>{item.name}</H1>
          <P>{item.description}</P>
          <P>{item.date}</P>
          <DivTicket>
            {item.tags.map((tag, index) => (
              <TicketText key={index} title={tag} text={tag} />
            ))}
          </DivTicket>
        </CardCertificationItem>
      ))}
    </CardCertificationContainer>
  );
}

export default CardCertifications;