import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaGithub, FaMoon, FaSun, FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaBars, FaTimes, FaAward, FaLanguage, FaStar, FaChevronUp } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import CardEducation from "../../components/cardEducation/CardEducation";
import CardExperiences from "../../components/cardExperiences/CardExperiences";
import CardProjects from "../../components/cardProjects/CardProjects";
import SkillsCards from "../../components/cardSkills/SkillsCards";
import CardCertifications from "../../components/cardCertifications/CardCertifications";
import { Div, TitleH1 } from "../../styles/general/styles";
import { changeTheme } from "../../store/session/sessionActions";
import { useDispatch, useSelector } from "react-redux";
import { DivCard } from "../projects/ProjectsStyles";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(37, 99, 235, 0); }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  @media (max-width: 768px) {
    padding: 5rem 1.5rem 3rem;
  }
`;

const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${(props) => props.theme.accent};
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 1s ease-out, ${float} 5s ease-in-out infinite 1s;
  box-shadow: 0 0 0 4px ${(props) => props.theme.background}, 0 0 0 7px ${(props) => props.theme.accent}33;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 0 0 4px ${(props) => props.theme.background}, 0 0 0 7px ${(props) => props.theme.accent}55;
  }
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const NameH1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 0.5rem;
  letter-spacing: -0.03em;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid ${(props) => props.theme.accent};
  width: 0;
  animation: ${typing} 2s steps(28) 0.5s forwards, ${blink} 0.8s step-end infinite;
  @media (max-width: 768px) {
    font-size: 1.75rem;
    white-space: normal;
    border-right: none;
    width: auto;
    overflow: visible;
    animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  }
`;

const Role = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => props.theme.accent};
  text-align: center;
  margin: 0 0 1rem;
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;
  letter-spacing: 0.02em;
`;

const ContactRow = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  font-size: 0.9rem;
  color: ${(props) => props.theme.textDescription};
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ContactItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const DescriptionP = styled.p`
  color: ${(props) => props.theme.textDescription};
  font-size: 1.05rem;
  text-align: center;
  max-width: 750px;
  line-height: 1.7;
  margin: 0 0 1.5rem;
  animation: ${fadeInUp} 0.8s ease-out 0.5s both;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const LogosDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 0.8s ease-out 0.7s both;
  a {
    transition: transform 0.3s ease, color 0.3s ease;
    display: flex;
    align-items: center;
    &:hover {
      transform: translateY(-3px) scale(1.12);
    }
  }
`;

const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: ${(props) => props.theme.accent};
  color: #ffffff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  animation: ${fadeInUp} 0.8s ease-out 0.9s both, ${pulse} 2s ease-in-out 2s infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35);
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5rem 1rem;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ThemeButton = styled.button`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  background: ${(props) => props.theme.cardBg};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 101;
  color: ${(props) => props.theme.text};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  &:hover {
    transform: rotate(25deg) scale(1.08);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background: ${(props) => props.theme.background}ee;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.border};
  z-index: 100;
  animation: ${fadeIn} 0.6s ease-out;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    gap: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.background};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    z-index: 200;
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? 'all' : 'none')};
    transition: opacity 0.3s ease;
    overflow-y: auto;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.textCard};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease;
  letter-spacing: 0.01em;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.accent};
    transition: width 0.3s ease;
  }
  &:hover {
    color: ${(props) => props.theme.text};
    &::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 0;
    width: 200px;
    text-align: center;
    border-bottom: 1px solid ${(props) => props.theme.border};
    &:last-of-type {
      border-bottom: none;
    }
    &::after {
      bottom: -2px;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 201;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  z-index: 201;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileThemeToggle = styled.button`
  display: none;
  background: none;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  margin-top: 1.5rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(25deg) scale(1.08);
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const SectionTitle = styled(TitleH1)`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const Divider = styled.hr`
  width: 80%;
  max-width: 1100px;
  border: none;
  border-top: 1px solid ${(props) => props.theme.border};
  margin: 0;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 2rem 1rem;
  text-align: center;
  color: ${(props) => props.theme.textDescription};
  font-size: 0.85rem;
  border-top: 1px solid ${(props) => props.theme.border};
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${(props) => props.theme.accent};
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 90;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
  transition: opacity 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

const TagsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  max-width: 800px;
`;

const Tag = styled.div`
  padding: 0.6rem 1.2rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(props) => props.theme.cardBg};
  font-size: 0.9rem;
  color: ${(props) => props.theme.textCard};
  transition: transform 0.2s ease, border-color 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.accent};
  }
`;

const ATSSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  max-width: 900px;
  margin-top: 1rem;
`;

const ATSTag = styled.span`
  padding: 0.35rem 0.75rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 6px;
  background: ${(props) => props.theme.cardBg};
  font-size: 0.78rem;
  color: ${(props) => props.theme.textDescription};
  font-weight: 400;
`;

const projectsData = [
  {logo: "https://res.cloudinary.com/dbktnqag9/image/upload/v1703354838/DemoDay/logo-PhotoRoom.png-PhotoRoom_keph7r.png", title: "GestaCourse", link: "https://github.com/MAKAIABootcamp/gestaCourse-project-frontend-6.git", title2: "Frontend", descripcion: "Aplicación web para facilitar y mejorar la gestión de la oferta académica, así como la simplificación en el proceso de inscripción para diversas entidades educativas.", date: "Dic 2024 - Ene 2025", technologies: [{name: "React.js", link:"https://cdn.svgporn.com/logos/react.svg"}, {name: "Javascript", link:"https://cdn.svgporn.com/logos/javascript.svg"}, {name:"Sass", link: "https://cdn.svgporn.com/logos/sass.svg"},{name:"Firebase", link: "https://cdn.svgporn.com/logos/firebase.svg"}, {name: "styled-components", link: "https://miro.medium.com/v2/resize:fit:636/format:webp/1*7jRD5QhgARucFKvRHFxpOg.png"}]},
  {logo: null, title: "Findy", link: "https://github.com/Jakekap/findy-makaia.git", title2: "Frontend", descripcion: "Aplicación web para buscar y encontrar personas que deseen compartir sus conocimientos y habilidades en diferentes áreas de interés.", date: "Nov 2024", technologies: [{name: "React.js", link:"https://cdn.svgporn.com/logos/react.svg"}, {name: "Javascript", link:"https://cdn.svgporn.com/logos/javascript.svg"}, {name:"Sass", link: "https://cdn.svgporn.com/logos/sass.svg"}]},
  {logo: null, title: "Flightapp", link: "https://github.com/Jakekap/sprint-2-flightapp.git", title2: "Frontend", descripcion: "Aplicación web para buscar y encontrar vuelos de diferentes aerolíneas.", date: "Nov 2024", technologies: [{name: "React.js", link:"https://cdn.svgporn.com/logos/react.svg"}, {name: "Javascript", link:"https://cdn.svgporn.com/logos/javascript.svg"}, {name:"Sass", link: "https://cdn.svgporn.com/logos/sass.svg"}]},
];

const softSkills = [
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Atención al detalle",
  "Pensamiento crítico",
  "Organización",
  "Proactividad",
  "Adaptabilidad",
  "Gestión del tiempo",
  "Aprendizaje continuo",
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "A2 - Básico" },
];

const atsKeywords = [
  "QA Analyst", "QA Junior", "Software Quality Assurance", "Functional Testing",
  "Manual Testing", "Test Cases", "Requirements Validation", "Bug Tracking",
  "Jira", "Excel", "React", "JavaScript", "HTML", "CSS", "Git", "GitHub",
  "SQL", "Frontend Developer Junior", "KoboToolbox", "Ada",
];

const pdfUrl = `${import.meta.env.BASE_URL}cv.pdf`;

function AnimatedSection({ children, style, id, delay = 0 }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <ContentSection ref={ref} visible={isVisible} style={{ ...style, transitionDelay: `${delay}s` }} id={id}>
      {children}
    </ContentSection>
  );
}

function Home() {
  const { isDay } = useSelector((store) => store.session);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      const navHeight = 60;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      <ThemeButton onClick={() => dispatch(changeTheme(!isDay))} aria-label="Cambiar tema">
        {isDay ? <FaMoon size={18} /> : <FaSun size={18} />}
      </ThemeButton>

      <NavBar>
        <HamburgerButton onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </HamburgerButton>
        <NavLinks open={menuOpen}>
          <CloseButton onClick={closeMenu} aria-label="Cerrar menú">
            <FaTimes />
          </CloseButton>
          <NavLink href="#about" onClick={scrollToSection}>Sobre mí</NavLink>
          <NavLink href="#skills" onClick={scrollToSection}>Habilidades</NavLink>
          <NavLink href="#softskills" onClick={scrollToSection}>Soft Skills</NavLink>
          <NavLink href="#projects" onClick={scrollToSection}>Proyectos</NavLink>
          <NavLink href="#education" onClick={scrollToSection}>Educación</NavLink>
          <NavLink href="#certifications" onClick={scrollToSection}>Certificaciones</NavLink>
          <NavLink href="#experience" onClick={scrollToSection}>Experiencia</NavLink>
          <MobileThemeToggle onClick={() => dispatch(changeTheme(!isDay))} aria-label="Cambiar tema">
            {isDay ? <FaMoon size={18} /> : <FaSun size={18} />}
          </MobileThemeToggle>
        </NavLinks>
      </NavBar>

      <HeroSection id="about">
        <ProfileImg
          src={`${import.meta.env.BASE_URL}profile.jpg.png`}
          alt="Josman Santiago Muñoz Mera"
        />
        <NameH1>Santiago Muñoz Mera</NameH1>
        <Role>QA Analyst &amp; Frontend Developer</Role>
        <ContactRow>
          <ContactItem><FaEnvelope size={14} /> santiago31469628@gmail.com</ContactItem>
          <ContactItem><FaPhone size={14} /> +57 316 855 38 14</ContactItem>
          <ContactItem><FaMapMarkerAlt size={14} /> Popayán, Colombia</ContactItem>
        </ContactRow>
        <DescriptionP>
          QA Analyst con 2 años de experiencia en aseguramiento de calidad de software, pruebas funcionales, validación de requisitos y seguimiento de defectos en aplicaciones web. Experiencia en diseño y ejecución de casos de prueba, matrices en Excel, Jira y documentación de evidencias. Estudiante de Ingeniería de Sistemas con formación en React y bases de datos, orientado a roles QA, QA Analyst y Frontend Developer Junior.
        </DescriptionP>
        <LogosDiv>
          <a href="https://www.instagram.com/josmanmu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={28} color={isDay ? "#475569" : "#94a3b8"} />
          </a>
          <a href="https://www.linkedin.com/in/santiago-mu%C3%B1oz-mera-75665622b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <TiSocialLinkedinCircular size={32} color={isDay ? "#475569" : "#94a3b8"} />
          </a>
          <a href="https://www.facebook.com/santi.munoz.773/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={28} color={isDay ? "#475569" : "#94a3b8"} />
          </a>
          <a href="https://github.com/josmanm" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={28} color={isDay ? "#475569" : "#94a3b8"} />
          </a>
        </LogosDiv>
        <DownloadBtn href={pdfUrl} download="CV_Josman_Santiago_Munoz_Mera.pdf">
          <FaDownload size={16} /> Descargar CV
        </DownloadBtn>
      </HeroSection>

      <Divider />

      <AnimatedSection id="skills">
        <Div>
          <SectionTitle>Habilidades Técnicas</SectionTitle>
          <SkillsCards />
        </Div>
      </AnimatedSection>

      <Divider />

      <AnimatedSection id="softskills" style={{ background: isDay ? "#f8fafc" : "#0a0f1e" }} delay={0.1}>
        <Div>
          <SectionTitle><FaStar style={{ marginRight: '0.5rem' }} />Soft Skills</SectionTitle>
          <TagsGrid>
            {softSkills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </TagsGrid>
        </Div>
      </AnimatedSection>

      <Divider />

      <AnimatedSection id="projects" delay={0.2}>
        <Div>
          <SectionTitle>Proyectos</SectionTitle>
          <DivCard>
            {projectsData.map((item, index) => (
              <CardProjects key={index} logo={item.logo} title={item.title} title2={item.title2} link={item.link} descripcion={item.descripcion} date={item.date} technologies={item.technologies}/>
            ))}
          </DivCard>
        </Div>
      </AnimatedSection>

      <Divider />

      <AnimatedSection id="education" style={{ background: isDay ? "#f8fafc" : "#0a0f1e" }} delay={0.3}>
        <Div>
          <SectionTitle>Educación</SectionTitle>
          <CardEducation />
        </Div>
      </AnimatedSection>

      <Divider />

      <AnimatedSection id="certifications" delay={0.35}>
        <Div>
          <SectionTitle><FaAward style={{ marginRight: '0.5rem' }} />Certificaciones</SectionTitle>
          <CardCertifications />
        </Div>
      </AnimatedSection>

      <Divider />

      <AnimatedSection id="experience" style={{ background: isDay ? "#f8fafc" : "#0a0f1e" }} delay={0.4}>
        <Div>
          <SectionTitle>Experiencia</SectionTitle>
          <CardExperiences />
        </Div>
      </AnimatedSection>

      <Divider />

      <AnimatedSection id="languages" delay={0.5}>
        <Div>
          <SectionTitle><FaLanguage style={{ marginRight: '0.5rem' }} />Idiomas</SectionTitle>
          <TagsGrid>
            {languages.map((lang) => (
              <Tag key={lang.name}>
                <strong>{lang.name}</strong> — {lang.level}
              </Tag>
            ))}
          </TagsGrid>
        </Div>
      </AnimatedSection>

      <Divider />

      <AnimatedSection id="ats" style={{ background: isDay ? "#f8fafc" : "#0a0f1e" }} delay={0.55}>
        <Div>
          <SectionTitle>Palabras Clave ATS</SectionTitle>
          <ATSSection>
            {atsKeywords.map((kw) => (
              <ATSTag key={kw}>{kw}</ATSTag>
            ))}
          </ATSSection>
        </Div>
      </AnimatedSection>

      <Footer>
        <p>&copy; {new Date().getFullYear()} Josman Santiago Muñoz Mera. Todos los derechos reservados.</p>
      </Footer>

      <BackToTop
        visible={showBackToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
      >
        <FaChevronUp size={20} />
      </BackToTop>
    </>
  );
}

export default Home;