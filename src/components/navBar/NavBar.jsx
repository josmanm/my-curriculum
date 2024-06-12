import { Link } from "react-router-dom";
import styled from "styled-components";
import { changeTheme } from "../../store/sesion/sessionActions";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { ImMagicWand } from "react-icons/im";
import { VscFileBinary } from "react-icons/vsc";
import { IoSchoolOutline } from "react-icons/io5";
import { GiOfficeChair } from "react-icons/gi";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  border-bottom: 1px solid #464e59;
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
  &:hover {
    cursor: pointer;
  }
  &:before {
    content: '</> ';
    color: #464e59;
    font-size: 25px;
  }
`;
const StyleLi = styled.li`
  color: #464e59;
  background-color: #ffffff;
`;
const Stylelink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: ${(props) => props.theme.textCard};
  font-size: 1rem;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const itemsNavBar = [
  ["home", "Home", <IoPersonCircle/>],
  ["skills", "Skills", <ImMagicWand />],
  ["projects", "Projects",<VscFileBinary />],
  ["education", "Education",<IoSchoolOutline />],
  ["experience", "Experience",<GiOfficeChair />],
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
        <StyleLiName><Stylelink style={ {display:"inline-block"} } to={"home"}> Josman Santiago Muñoz Mera  </Stylelink></StyleLiName>
        {itemsNavBar.map((item, index) => {
          return (
            <li key={index}>
              <Stylelink to={item[0]}> {item[2]} {item[1]} </Stylelink>
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
