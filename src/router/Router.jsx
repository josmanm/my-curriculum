import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Layout from "../components/layout/Layout"
import Projects from "../pages/projects/Projects"
import Skills from "../pages/skills/Skills"
import Education from "../pages/education/Education"
import Resumen from "../pages/resumen/Resumen"
import Contact from "../pages/contact/Contact"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import {themeDay} from '../styles/light/light'
import {themeNight} from '../styles/dark/dark'
import SkillsView from "../pages/SkillsView/SkillsView"
import Experiences from "../pages/experiences/Experiences"
import { useSelector } from "react-redux"


// Crear un componente global de estilo para aplicar los estilos del tema
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
    font-family: "Roboto", sans-serif;
  }
`;

function Router() {
  const { isDay } = useSelector(store => store.sesion)
  return (
      <ThemeProvider theme={isDay ? themeDay : themeNight}>
        <GlobalStyle />
        <Routes>
            <Route element={<Layout/>}>
              <Route index element={<Home/>} ></Route>
              <Route path="home" element={<Home/>}></Route>
              <Route path="skills" element={<Skills/>}></Route>
              <Route path="projects" element={<Projects/>} ></Route>
              <Route path="education" element={<Education/>} ></Route>
              <Route path="experience" element={<Experiences/>} ></Route>
              <Route path="resumen" element={<Resumen/>} ></Route>
              <Route path="contact" element={<Contact/>} ></Route>
              <Route path="/:id" element={<SkillsView/>} ></Route>
            </Route>
        </Routes>
      </ThemeProvider>
      
  )
}

export default Router