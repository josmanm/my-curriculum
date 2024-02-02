import { Degradado, DivCard, DivSkills, H1, Img, LinkSkills } from "./CardSkillsStyle";
import { useEffect, useState } from "react";
import { getTechnologies } from "../../services/technologiesServices";

const data = [
    { id:1, name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", descripcion: "React es una biblioteca de JavaScript para construir interfaces de usuario."},
    { id:2, name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", descripcion: "JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web interactivas."},
    { id:3, name: "Html", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", descripcion: "HTML es el lenguaje de marcado estándar para documentos diseñados para ser mostrados en un navegador web."},
    { id:4, name: "Css", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", descripcion: "CSS es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en HTML."},
    { id:5, name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",descripcion: "Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código."},
    { id:6, name: "Sass", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg", descripcion: "Sass es un lenguaje de hojas de estilo que se compila en CSS."},
    { id:7, name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",descripcion: "Git es un sistema de control de versiones distribuido de código abierto y gratuito."},
    { id:8, name: "Redux", logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png", descripcion: "Redux es una biblioteca de código abierto para manejar el estado de la aplicación en JavaScript."},
    { id:9, name: "Styled Components", logo: "https://styled-components.com/logo.png", descripcion: "Styled Components es una biblioteca para React y React Native que permite usar estilos en JavaScript."},
    { id:10, name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", descripcion: "Bootstrap es un marco de trabajo de código abierto para el diseño de sitios y aplicaciones web."},
]

function CardSkills() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getTechnologies().then((response) =>{
      setTechnologies(response);
      console.log(response)
    } ).then
  }, []);

  return (
    <DivSkills>
      {data.map((item) => (
        <LinkSkills key={item.name} to={`/${item.name}`}>
          <DivCard >
            <H1>{item.name}</H1>
            <Degradado></Degradado>
            <Img src={item.logo} alt={item.name}/>
          </DivCard>
        </LinkSkills>
      ))}
    </DivSkills>
  );
}

export default CardSkills;
