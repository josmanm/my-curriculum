import { HashRouter } from "react-router-dom"
import Home from "../pages/home/Home"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import {themeDay} from '../styles/light/light'
import {themeNight} from '../styles/dark/dark'
import { useSelector } from "react-redux"


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
    font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  section[id] {
    scroll-margin-top: 70px;
  }

  ::selection {
    background: ${(props) => props.theme.accent};
    color: #ffffff;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.body};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.borderhover};
    border-radius: 4px;
  }
`;

function Router() {
  const { isDay } = useSelector(store => store.session)
  return (
      <ThemeProvider theme={isDay ? themeDay : themeNight}>
        <GlobalStyle />
        <HashRouter>
          <Home />
        </HashRouter>

      </ThemeProvider>
      
  )
}

export default Router