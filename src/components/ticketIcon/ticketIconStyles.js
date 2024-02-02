import styled from "styled-components";

export const TicketIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 30%;
    height: 30px;
    width: 30px;
    &:hover {
    cursor: pointer;
    border: 1px solid  ${(props) => props.theme.borderHover};
    }
    &:hover::after {
        content: "${(props) => props.name}";
        position: absolute;
        top: 100%;
        transform: translateX(-50%);
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        border-radius: 5px;
        padding: 0.2rem;
        font-size: 0.6rem;
        font-weight: 400;
        z-index: 1;
`;

export const TicketIconImg = styled.img`
    height: 50%;
    width: 50%;
`;