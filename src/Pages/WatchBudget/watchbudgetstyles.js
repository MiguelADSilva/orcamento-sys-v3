import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

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

export const SearchContent = styled.div `
    width: 23rem;
    height: 4rem;
    background-color: white;
    border: 7px solid #000000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
    align-items: center;
    margin-top: 5rem !important;

    @media ${(props) => props.theme.breakpoints.md} { 
        width: 20rem;
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 2rem !important;
    }
`;

export const Search = styled.input ` 
    background-color: white;
    width: 18rem;
    height: 4rem;
    border: 0;
    outline: 0;
    font-size: 2rem;
    color: black;
    font-weight: bold;

    @media ${(props) => props.theme.breakpoints.md} { 
        width: 14rem;
        font-size: 2rem;

        &::placeholder { 
            color: black;
            font-family: ${(props) => props.theme.fonts.main};
            font-weight: bold;
        }
    }

    &:focus {
        border: 0;
        outline: 0;
        font-size: 2rem;
    }

    &::placeholder { 
        color: black;
        font-family: ${(props) => props.theme.fonts.main};
        font-weight: bold;
    }
`;  

export const SearchIcon = styled(SearchOutlined) `
    font-size: 2rem;
    display: flex;
    margin-left: 1rem !important;
    padding-right: 1rem !important;

    @media ${(props) => props.theme.breakpoints.md} { 
        margin-left: 1rem !important;
        padding-right: 1rem !important;
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
        margin-bottom: 4rem !important;
    }
`;

export const Cards = styled.div ` 
    min-width: 19rem;
    height: 20rem;
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
    width: 100%;
    height: 2rem;
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

export const TotalItemsTxt = styled.h4` 
    margin-top: 2rem !important;
    padding-left: 1rem !important;
    font-family: ${(props) => props.theme.fonts.main};
`;

export const HR = styled.hr` 
    margin-top: 4rem !important;
    border: 5px solid #000000;
`;

export const ContentBtn = styled.div ` 
    min-width: 100%;
    min-height: 6.5rem;
    margin-top: 3rem !important;
    margin-left: -0.5rem !important;
    border: 9px solid #000000;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.button ` 
    background-color: white;
    background: white;
    border: 3px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    min-width: 5rem;
    min-height: 3rem;
    margin-left: 1rem !important;
    margin-right: 0.5rem !important;
    cursor: pointer;
    font-weight: bold;
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.5rem;

    @media ${(props) => props.theme.breakpoints.md} { 
        min-width: 4rem;
    }
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

export const StyledLink = styled(Link) ` `;