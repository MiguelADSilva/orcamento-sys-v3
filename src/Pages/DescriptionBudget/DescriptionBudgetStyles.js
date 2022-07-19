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

export const CardsContent = styled.div ` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5rem !important;
    margin-bottom: 15rem !important;

    @media ${(props) => props.theme.breakpoints.md} { 
        width: 100%;
        margin-bottom: 10rem !important;
    }
`;

export const Cards = styled.div ` 
    min-width: 19rem;
    min-height: 20rem;
    background-color: #fff;
    float: left !important;
    margin-top: 2rem !important;
    margin-left: 2rem !important;
    margin-right: 2rem !important;
    background: #FFFFFF;
    border: 9px solid #000000;
    box-shadow: 10px 7px 0px #000000;

    @media ${(props) => props.theme.breakpoints.md} { 
        margin-bottom: 0.5rem !important; 
    }
`

export const CardTitle = styled.div ` 
    min-width: 1rem;
    min-height: 5rem;
    background-color: white;
    background: white;
    border: 9px solid #000000;
    border-radius: 0px 0px 20px 20px;
    margin-left: -0.5rem !important;
    margin-top: -0.5rem !important;
    margin-right: -0.5rem !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1 ` 
    color: black;
    font-family: ${(props) => props.theme.fonts.main};
`;

export const CardDescription = styled.div ` 
    min-width: 100%;
    min-height: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0.5rem !important;
`

export const PriceTxt = styled.h4` 
    margin-top: 2rem !important;
    padding-left: 1rem !important;
    font-family: ${(props) => props.theme.fonts.main};
`;

export const FooterContent = styled.div ` 
    display: none;
    
    @media ${(props) => props.theme.breakpoints.md} { 
        display: flex;
        width: 100%;
        z-index: 1;
        bottom: 0;
        position: fixed;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    }
`