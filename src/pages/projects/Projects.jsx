import CardProjects from "../../components/cardProjects/CardProjects"
import Skeleton from "../../components/skeleton/Skeleton";
import { Section } from "../../styles/general/styles";
import { DivCard } from "./ProjectsStyles";

const data =[
  {logo: "https://res.cloudinary.com/dbktnqag9/image/upload/v1703354838/DemoDay/logo-PhotoRoom.png-PhotoRoom_keph7r.png", title: "GestaCourse",link: "https://github.com/MAKAIABootcamp/gestaCourse-project-frontend-6.git" ,title2: "Frontend", days: "2 days ago", descripcion: "GestaCourse es una aplicación web cuyo propósito es facilitar y mejorar la gestión de la oferta académica, así como la simplificación en el proceso de inscripción a los mimos para las diversas entidades educativas", date: "December 2024 - January 2024", technologies: [{name: "React.js" , link:"https://cdn.svgporn.com/logos/react.svg"}, {name: "Javascript", link :"https://cdn.svgporn.com/logos/javascript.svg"}, {name:"Sass", link: "https://cdn.svgporn.com/logos/sass.svg"},{name:"Firebase", link: "https://cdn.svgporn.com/logos/firebase.svg"}, {name: "styled-components", link: "https://miro.medium.com/v2/resize:fit:636/format:webp/1*7jRD5QhgARucFKvRHFxpOg.png"}]},
  {logo: "https://i.pinimg.com/564x/80/b5/81/80b5813d8ad81a765ca47ebc59a65ac3.jpg", title: "Findy", link: "https://github.com/Jakekap/findy-makaia.git", title2: "Frontend", days: "2 days ago", descripcion: "Findy es una aplicación web que permite a los usuarios buscar y encontrar personas que deseen compartir sus conocimientos y habilidades en diferentes áreas de interés. Este fue un proyecto realizado en el bootcamp de Makaia como practica", date: "Noviembre-2024", technologies: [{name: "React.js" , link:"https://cdn.svgporn.com/logos/react.svg"}, {name: "Javascript", link :"https://cdn.svgporn.com/logos/javascript.svg"}, {name:"Sass", link: "https://cdn.svgporn.com/logos/sass.svg"}]},
  {logo: "https://i.pinimg.com/564x/80/b5/81/80b5813d8ad81a765ca47ebc59a65ac3.jpg", title: "Flightapp", link: "https://github.com/Jakekap/sprint-2-flightapp.git", title2: "Frontend", days : "", descripcion: "Flightapp es una aplicación web que permite a los usuarios buscar y encontrar vuelos de diferentes aerolineas, este fue un proyecto realizado en el bootcamp de Makaia como practica", date: "Noviembre-2024", technologies: [{name: "React.js" , link:"https://cdn.svgporn.com/logos/react.svg"}, {name: "Javascript", link :"https://cdn.svgporn.com/logos/javascript.svg"}, {name:"Sass", link: "https://cdn.svgporn.com/logos/sass.svg"}]},
  
]

function Projects() {
  return (
    <Section>
      <Skeleton title='Projects' />
        <DivCard>
          {
            data.map((item, index) => (
              <CardProjects key={index} logo={item.logo} title={item.title} title2={item.title2}  link={item.link} descripcion={item.descripcion} date={item.date} technologies={item.technologies}/>
            ))
          }
        </DivCard>
    </Section>
  )
}

export default Projects