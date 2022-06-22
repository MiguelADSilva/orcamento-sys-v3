import styled from 'styled-components';

export const Content = styled.div `
    min-width: 100%;
    min-height: 100vh;
    background-color: #F8C982;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.md} { 
        min-width: 100%;
        min-height: 100vh;
        background-color: #F8C982;
        align-items: center;
    }
`;

export const HeaderContent = styled.div ` 
    display: flex;
    flex-direction: row;
    min-width: 100%;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.md} { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 100%;
    }
`;

export const Input = styled.input ` 
    
    min-width: 10rem;
    min-height: 2rem;
    margin-left: 2rem !important;
    margin-top: -0.5rem !important;   

    @media ${(props) => props.theme.breakpoints.md} { 
        margin-bottom: 3rem !important;
        width: 10rem;
        height: 2rem;
    }
`