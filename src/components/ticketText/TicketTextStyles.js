import styled from "styled-components";

export const TicketTextContainer = styled.div`

    border: 1px solid ${(props) => props.theme.border};
    border-radius: 15px;
    &:hover {
        cursor: pointer;
        border: 1px solid  ${(props) => props.theme.borderHover};
    }
    margin: 0 0.4rem 0.4rem 0;
`;

export const TicketTextP = styled.p`
    font-size: 0.6rem;
    font-weight: 400;
    color: ${(props) => props.theme.text};
    text-align: center;
    margin: 0.5rem ;
`;