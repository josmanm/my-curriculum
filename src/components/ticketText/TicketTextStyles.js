import styled from "styled-components";

export const TicketTextContainer = styled.div`
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 20px;
  padding: 0.2rem 0.6rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
  &:hover {
    cursor: default;
    border-color: ${(props) => props.theme.borderhover};
    transform: scale(1.05);
  }
`;

export const TicketTextP = styled.p`
  font-size: 0.72rem;
  font-weight: 500;
  color: ${(props) => props.theme.textCard};
  text-align: center;
  margin: 0;
  white-space: nowrap;
`;