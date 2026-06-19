import styled from "styled-components";

export const DivCard = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;