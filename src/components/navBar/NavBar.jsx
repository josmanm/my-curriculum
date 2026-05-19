import { Link } from "react-router-dom";
import styled from "styled-components";
import { changeTheme } from "../../store/session/sessionActions";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { ImMagicWand } from "react-icons/im";
import { VscFileBinary } from "react-icons/vsc";
import { IoSchoolOutline } from "react-icons/io5";
import { GiOfficeChair } from "react-icons/gi";

const StyleNav = styled.nav`
  display: flex;
  width: 100%;
  border-radius: 10px;
  border-bottom: 1px solid #464e59;
`;
const StyleUl = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #464e59;
  list-style-type: none;
`;
const StyleLiName = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  color: ${(props) => props.theme.text};
  &:hover {
    cursor: pointer;
  }
  &:before {
    color: #464e59;
    font-size: 25px;
  }
`;
const StyleLi = styled.li`
  color: #464e59;
  background-color: #ffffff;
`;

const StyleLiNav = styled.li`
  display: flex;
  flex-direction: row;
  align-items : center;
  color: #464e59;
  &:hover {
    cursor: pointer;
  }
`;

const Stylelink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => props.theme.textCard};
  font-size: 1rem;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const StyleA = styled.a`
  color: ${(props) => props.theme.textCard};
  padding: 10px;
  text-decoration: none;
  font-size: 1rem;
`;

const itemsNavBar = [
  { path: "home", label: "Home", Icon: IoPersonCircle },
  { path: "skills", label: "Skills", Icon: ImMagicWand },
  { path: "projects", label: "Projects", Icon: VscFileBinary },
  { path: "education", label: "Education", Icon: IoSchoolOutline },
  { path: "experience", label: "Experience", Icon: GiOfficeChair },
  { path: "resumen", label: "Resumen" },
];

function NavBar() {
  const { isDay } = useSelector((store) => store.session);
  const dispatch = useDispatch();
  const isNigth = () => {
    dispatch(changeTheme(!isDay));
  };
  return (
    <StyleNav>
      <StyleUl>
          <StyleLiName>
            <Stylelink style={ {display:"inline-block"} } to={"home"}> Josman Santiago Muñoz Mera  </Stylelink>
          </StyleLiName>
          {itemsNavBar.map((item) => {
            const Icon = item.Icon;

            return (
              <StyleLiNav key={item.path}>
                <Stylelink to={item.path}> {Icon ? <Icon /> : null} <StyleA>{item.label}</StyleA>  </Stylelink>
              </StyleLiNav>
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
      </StyleUl>
    </StyleNav>
  );
}

export default NavBar;
