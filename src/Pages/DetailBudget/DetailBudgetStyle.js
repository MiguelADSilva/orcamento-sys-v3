import styled from 'styled-components';

export const ContentBudget = styled.div ` 
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
    }
`;

export const HeaderContent = styled.div ` 
    display: flex;
    flex-direction: row;
    min-width: 100%;
    justify-content: space-around;

    @media ${(props) => props.theme.breakpoints.md} { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 100%;
    }
`;

export const TotalPrice = styled.h1 `

`;

export const Input = styled.input ` 
    @media ${(props) => props.theme.breakpoints.md} { 
        margin-bottom: 3rem !important;
        width: 10rem;
        height: 2rem;
    }
`

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
        margin-bottom: 4rem !important;
    }
`;

export const Cards = styled.div ` 
    width: 22rem;
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
        width: 20rem;
    }
`;

export const CardTitle = styled.div ` 
    min-width: 19rem;
    min-height: 5rem;
    background-color: #CE5DD0;
    background: #CE5DD0;
    border: 9px solid #000000;
    border-radius: 0px 0px 20px 20px;
    margin-left: -0.5rem !important;
    margin-top: -0.5rem !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1 ` 
    color: white;
    font-family: ${(props) => props.theme.fonts.main};
`;

export const CardDescription = styled.div ` 
    width: 100%;
    min-height: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0.5rem !important;
`;

export const DescriptionTxt = styled.h4` 
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

export const Button = styled.button ` 
    background-color: #CE5DD0;
    background: #CE5DD0;
    border: 3px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    width: 10rem;
    min-height: 3rem;
    margin-left: 1rem !important;
    margin-right: 0.5rem !important;
    cursor: pointer;
    font-weight: bold;
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.5rem;
`;

export const ShopListContent = styled.div ` 
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 3rem;
    align-items: flex-end;
    margin-top: 5rem !important;
    position: fixed;
`;