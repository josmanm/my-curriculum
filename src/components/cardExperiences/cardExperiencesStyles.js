import styled from "styled-components";

export const CardExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    cursor: pointer;
`;

export const CardExperienceItem = styled.div`
    display: flex;
    width: 50%;
    box-sizing: bottom-box;
    border: 1px solid black;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid ${(props) => props.theme.border};
    padding: 20px;
    &:hover {
        border: 1px solid ${(props) => props.theme.borderhover};
    }
`;

export const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: #ccc;
  margin: 0 16px; /* Ajusta el espacio entre la línea y el texto */
`;

export const CardExperienceDivImg = styled.div`
    width: 50px;
    height: 50px;
`;

export const H1 = styled.h1`
    font-size: 1.5rem;
    margin 0;
    padding 0;
    display: flex;
`;

export const P = styled.p`
    font-size: 1rem;
    margin 0;
    padding 0;
    display: flex;
`;

export const CardExperienceLogo = styled.img`
    width: 100%;
    height: 100%;
`;

export const DivTicket = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 0.2fr);
    align-items: center;
    justify-content: start;
`;