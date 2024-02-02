import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkSkills = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.text};
`;

export const DivSkills = styled.div`
  display: grid;
  width: 80%;
  height: 20vh;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  cursor: pointer;
`

export const DivCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border: ${(props) => props.theme.border} 1px solid;
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: 8vh;
  overflow: hidden;
  &:hover{
    background-color: ${(props) => props.theme.background};
    border: #464a51 1px solid;
  }
`

export const Degradado = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  mix-blend-mode: overlay; 
`
export const H1 = styled.h1`
  font-weight: 100;
  font-size: 1rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.textCard};
`
export const Img = styled.img`
  width: 25%; /* Ajusta el ancho de la imagen según tus necesidades */
  height: auto; /* Para mantener la proporción original de la imagen */
  opacity: 0.2; /* Configura la opacidad (0 es completamente transparente, 1 es completamente opaco) */
  position: absolute; /* Permite posicionar la imagen con respecto al contenedor */
  right: 0;
  object-fit: cover; 
`
