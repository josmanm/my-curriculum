import { Link } from "react-router-dom"
import styled from "styled-components"

const Ul = styled.ul`
  display: flex;
  width: 100%;
  flex-direction:row;
  justify-content: space-around;
  color: #464e59;
  list-style-type: none;
`
const Al = styled.p`
  text-decoration:none
`
const Stylelink= styled(Link)`
     text-decoration:none;
     color:white;
     font-size:20px;
     &:hover{
          border-bottom:2px solid white;
     }
`;
function NavBar() {
    const itemsNavBar = [
        ['home','Home'],
        ['skills','Skills'],
        ['projects','Projects'],
        ['education','Education'],
        ['resumen','Resumen'],
        ['contact','Contact']
    ]
  return (
    <nav>
        <Ul>
            <p>Josma Muñoz</p>
            {itemsNavBar.map((item,index) => {
               return <li key={index}><Stylelink to={item[0]}> {item[1]} </Stylelink></li>
            })}
        </Ul>
    </nav>
  )
}

export default NavBar