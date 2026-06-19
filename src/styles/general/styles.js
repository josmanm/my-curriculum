import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5rem 1rem;
`;

export const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TitleH1 = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  letter-spacing: -0.02em;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${(props) => props.theme.accent};
    border-radius: 2px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding-left: 1rem;
  border: ${(props) => props.theme.border} 1px solid;
  border-radius: 8px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-family: inherit;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${(props) => props.theme.borderhover};
  }
  &:focus {
    border-color: ${(props) => props.theme.accent};
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.textDescription};
  }
`;