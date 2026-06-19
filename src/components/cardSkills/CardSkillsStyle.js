import styled from 'styled-components'

export const DivSkills = styled.div`
  display: grid;
  width: 100%;
  max-width: 900px;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.border} 1px solid;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.cardBg};
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  &:hover {
    border-color: ${(props) => props.theme.borderhover};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  }
`;

export const SkillName = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  color: ${(props) => props.theme.textCard};
`;