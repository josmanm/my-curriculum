import { useEffect, useState } from "react";
import { getExperiences } from "../../services/experiencesServices";
import { CardExperienceContainer, CardExperienceItem, H1, P, BulletsList, Bullet } from "./cardExperiencesStyles";

function CardExperiences() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExperiences().then((data) => {
      setExperiences(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <CardExperienceContainer>
        {Array.from({ length: 3 }).map((_, i) => (
          <CardExperienceItem key={i} style={{ minHeight: '120px' }} />
        ))}
      </CardExperienceContainer>
    );
  }

  return (
    <CardExperienceContainer>
      {experiences.map((item, index) => (
        <CardExperienceItem
          key={item.id}
          style={{ alignSelf: index % 2 === 1 ? "flex-end" : "flex-start" }}
        >
          <H1>{item.name}</H1>
          <P style={{ fontWeight: 500, color: 'inherit', fontSize: '0.85rem' }}>{item.status}</P>
          <P>{item.date} | {item.city}</P>
          {item.bullets && (
            <BulletsList>
              {item.bullets.map((bullet, i) => (
                <Bullet key={i}>{bullet}</Bullet>
              ))}
            </BulletsList>
          )}
        </CardExperienceItem>
      ))}
    </CardExperienceContainer>
  );
}

export default CardExperiences;