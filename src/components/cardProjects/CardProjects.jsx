/* eslint-disable react/prop-types */
import styled from "styled-components";
import TicketIcon from "../ticketIcon/TicketIcon";
import TicketText from "../ticketText/TicketText";
import { Link } from "react-router-dom";
import { useState } from "react";


const DivContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
  &:hover {
    border: 1px solid #464a51;
  }
`;

const MovableCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: rotateY(10deg) rotateX(10deg);
  }
`;

const DivTitles = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: start;
  margin-top: 1rem;
`;

const DivTitlesLogo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DivLogo = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    border: 1px solid  ${(props) => props.theme.borderHover};
  }
`;

const Hr = styled.hr`
  width: 90%;
  margin-top: 0;
  margni-bottom: 0;
  border-color: ${(props) => props.theme.border};
`;
const DivDate = styled.div`
    display: flex;
    width: 90%;
    felx-direction. row;
    align-items: start;
    justify-content: space-between;
    color: ${(props) => props.theme.textDescription};
`;

const H3 = styled.h3`
  display: flex;
  color: ${(props) => props.theme.text};
  margin: 0;
`
const P = styled.p`
  display: flex;
  margin: 0;
`


const DivDescription = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: start;
  color: ${(props) => props.theme.textCard};
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const DivTicketDate = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content:start;
  margin-bottom: 0.5srem;
`

const DivTicket = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 5fr);
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const Path = styled.path`
  fill: ${(props) => props.theme.text};
`



function CardProjects(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <DivContainer>
      <MovableCard  onMouseMove={handleMouseMove}>
          <DivTitles>
            <Img src={props.logo} alt={props.name} />
            <DivTitlesLogo>
              <h3>{props.title}</h3>
              <DivLogo>
                <Link to={props.link}>
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <Path
                        d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65 1.99 17.904 11.053 34.485 23.793 47.225 12.738 12.74 29.32 21.803 47.223 23.793 17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588 8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047-13.056-1.45-26.29-8.44-36.485-18.633-10.194-10.195-17.182-23.43-18.632-36.485-1.45-13.056 2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27 19.745 3.334 40.126 14.96 56.195 31.03 16.07 16.068 27.696 36.45 31.03 56.195 3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16 12.726 12.727 220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642-4.118-24.402-17.718-47.595-36.05-65.926-18.33-18.332-41.523-31.93-65.925-36.05-6.1-1.03-12.296-1.422-18.474-1.114z"
                      ></Path>
                    </g>
                  </svg>
                </Link>
              </DivLogo>
            </DivTitlesLogo>
          </DivTitles>
          <Hr />
          <DivDate>
            <H3>{props.title2}</H3>
          </DivDate>
          <DivDescription>
            <p>{props.descripcion}</p>
          </DivDescription>
          <DivTicketDate>
            <TicketText text={props.date}/>
          </DivTicketDate>
          <Hr />
          <DivTicket>
            {
              props.technologies.map((item, index) => (
                <TicketIcon key={index} name={item.name} Link={item.link} title={props.title} />
              ))
            }
          </DivTicket>
      </MovableCard>
    </DivContainer>
  );
}

export default CardProjects;
