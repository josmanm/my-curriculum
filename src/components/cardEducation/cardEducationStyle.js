import styled from "styled-components";

export const CardEducationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    gap: 1rem;
`;

export const CardEducationItem = styled.div`
    display: flex;
    width: 48%;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.cardBg};
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    &:hover {
        border-color: ${(props) => props.theme.borderhover};
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const CardEducationDivImg = styled.div`
    width: 56px;
    height: 56px;
    margin-bottom: 0.5rem;
`;

export const H1 = styled.h1`
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
`;

export const P = styled.p`
    font-size: 0.9rem;
    margin: 0.15rem 0;
    color: ${(props) => props.theme.textDescription};
`;

export const CardEducationLogo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 40%;
    object-fit: contain;
`;

export const DivTicket = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.75rem;
`;