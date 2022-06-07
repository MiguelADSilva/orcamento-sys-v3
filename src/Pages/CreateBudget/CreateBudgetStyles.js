import styled from 'styled-components';

export const ContentBudget = styled.div ` 
    min-width: 100%;
    min-height: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.sm} { 
        min-width: 100%;
        min-height: 100%;
    }
`;