import { ThemeProvider } from "styled-components";
const darkmode = {
    colors: {
        background: "#000000",
      },
      fonts: ["Arial", "sans-serif"],
      fontSizes: {
        text: "1rem",
        subtitles: "2rem",
        titles: "3rem"
      }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={darkmode}>{children}</ThemeProvider>
  );
  
  export default Theme;