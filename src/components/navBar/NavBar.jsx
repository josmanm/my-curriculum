import { Link } from "react-router-dom";
import styled from "styled-components";
import { changeTheme } from "../../store/sesion/sessionActions";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
`;
const Ul = styled.ul`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #464e59;
  list-style-type: none;
`;
const StyleLiName = styled.li`
  width: 30%;
  color: ${(props) => props.theme.text};
`;
const StyleLi = styled.li`
  color: #464e59;
  background-color: #ffffff;
`;
const Stylelink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const itemsNavBar = [
  ["home", "Home"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["resumen", "Resumen"]
];

function NavBar() {
  const { isDay } = useSelector((store) => store.sesion);
  const dispatch = useDispatch();
  const isNigth = () => {
    dispatch(changeTheme(!isDay));
  };
  return (
    <Nav>
      <Ul>
        <StyleLiName>Josman Santiago Muñoz</StyleLiName>
        {itemsNavBar.map((item, index) => {
          return (
            <li key={index}>
              <Stylelink to={item[0]}> {item[1]} </Stylelink>
            </li>
          );
        })}
        <StyleLi>
          <div
            style={{
              backgroundColor: isDay ? "white" : "black",
              display: "inline-block",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={isNigth}
          >
            {isDay ? (
              <FaMoon size={20} color="black" />
            ) : (
              <FaSun size={20} color="white" />
            )}
          </div>
        </StyleLi>
      </Ul>
    </Nav>
  );
}

export default NavBar;
