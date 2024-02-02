import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Div = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

export const TitleH1 = styled.h1`
font-size: 4rem;
font-weight: 700;
margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding-left: 10px; 
  border: gray 1px solid;
  border-radius: 25px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: ${(props) => props.theme.border} 1px solid;
  &:hover {
    border: ${(props) => props.theme.borderhover} 1px solid;
  }
  &:focus {
    border: ${(props) => props.theme.borderhover} 1px solid;
    outline: none;
  }
  &::placeholder {
    text-indent: 10px; /* Ajusta el valor según sea necesario para mover el texto a la derecha */
    padding-left: 10px; /* También puedes ajustar el padding para mayor control */
}
`;