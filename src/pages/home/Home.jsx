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
  margin-bottom: 0.5rem;
`;

const FaInstagramst = styled(FaInstagram)`
  color: ${(props) => props.theme.text};
`;

const FaFacebookst = styled(FaFacebook)`
  color: ${(props) => props.theme.text};
`;

const FaGithubst = styled(FaGithub)`
  color: ${(props) => props.theme.text};
`;

const TiSocialLinkedinCircularst = styled(TiSocialLinkedinCircular)`
  color: ${(props) => props.theme.text};
`;

const P = styled.p`
  color: ${(props) => props.theme.textDescription};
  font-size: 1.2rem;
  margin-bottom: 0;
`;


function Home() {
  return (
    <Section>
      <TextDiv>
        <TitleH1>Santiago Muñoz Mera,</TitleH1>
        <P>
        Estudiante de Ingeniería de Sistemas en la Universidad del Cauca con sólidos conocimientos en diversos lenguajes de programación como Java, C#, Python y JavaScript. Mi formación incluye experiencia en el desarrollo de aplicaciones utilizando frameworks modernos como React y competencia en el diseño e implementación de bases de datos, destacándome en entornos MySQL y Oracle.
        </P>
        <DivLogos>
        <Link to='https://www.instagram.com/josmanmu/'>
          <FaInstagramst size={32}/>
        </Link>
        <Link to='https://www.linkedin.com/in/santiago-mu%C3%B1oz-mera-75665622b/'>
          <TiSocialLinkedinCircularst size={32}/>
        </Link>
        <Link to='https://www.facebook.com/santi.munoz.773/'>
          <FaFacebookst size={32} />
        </Link>
        <Link to='https://github.com/josmanm'>
          <FaGithubst  size={32}/>
        </Link>
      </DivLogos>
      </TextDiv>
    </Section>
  );
}
export default Home;
