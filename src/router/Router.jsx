import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Layout from "../components/layout/Layout"
import Skills from "../pages/skills/Skills"
import { useState } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"

// Definir las variables de tema para día y noche
const themeDay = {
  body: '#ffffff',
  background: '#000000',
};

const themeNight = {
  body: '#111111',
  text: '#ffffff',
};

// Crear un componente global de estilo para aplicar los estilos del tema
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
    font-family: 'Kanit', sans-serif;
  }
`;

function Router() {
  const [isDay, setIsDay] = useState(false);

  return (
      <ThemeProvider theme={isDay ? themeDay : themeNight}>
        <GlobalStyle />
        <Routes>
            <Route element={<Layout/>}>
              <Route index element={<Home/>} ></Route>
              <Route path="home" element={<Home/>}></Route>
              <Route path="skills" element={<Skills/>}></Route>
            </Route>
        </Routes>
      </ThemeProvider>
      
  )
}

export default Router