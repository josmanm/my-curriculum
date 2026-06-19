import styled from "styled-components";

export const TicketIconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 30%;
  height: 30px;
  width: 30px;
  transition: border-color 0.2s ease, transform 0.2s ease;
  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.borderhover};
    transform: scale(1.1);
  }
  &:hover::after {
    content: "${(props) => props.name}";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    padding: 0.25rem 0.5rem;
    font-size: 0.6rem;
    font-weight: 400;
    white-space: nowrap;
    z-index: 10;
    pointer-events: none;
  }
`;

export const TicketIconImg = styled.img`
  height: 50%;
  width: 50%;
  object-fit: contain;
`;