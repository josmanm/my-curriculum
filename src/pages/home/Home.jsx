import styled from "styled-components";
import { FaFacebook, FaInstagram,FaGithub  } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { DivLogos } from "./HomeStyles";
import { Link } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;
const TitleH1 = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

function Home() {
  return (
    <Section>
      <TextDiv>
        <TitleH1>Santigo Muñoz Mera,</TitleH1>
        <p>
        Estudiante de Ingeniería de Sistemas en la Universidad del Cauca con sólidos conocimientos en diversos lenguajes de programación como Java, C#, Python y JavaScript. Mi formación incluye experiencia en el desarrollo de aplicaciones utilizando frameworks modernos como React y competencia en el diseño e implementación de bases de datos, destacándome en entornos MySQL y Oracle.
        </p>
        <DivLogos>
        <Link to='https://www.instagram.com/josmanmu/'>
          <FaInstagram size={32} color="#ffffff"/>
        </Link>
        <Link to='https://www.linkedin.com/in/santiago-mu%C3%B1oz-mera-75665622b/'>
          <TiSocialLinkedinCircular size={32} color="#ffffff" />
        </Link>
        <Link to='https://www.facebook.com/santi.munoz.773/'>
          <FaFacebook size={32} color="#ffffff"/>
        </Link>
        <Link to='https://github.com/josmanm'>
          <FaGithub  size={32} color="#ffffff"/>
        </Link>
      </DivLogos>
      </TextDiv>
    </Section>
  );
}
export default Home;
