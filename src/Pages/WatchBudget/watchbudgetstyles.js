import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons'


export const Content = styled.div `
    width: 100%;
    background-color: #F8C982;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.md} { 
        width: 100%;
        background-color: #F8C982;
        align-items: center;
    }
`;

export const SearchContent = styled.div `
    width: 23rem;
    height: 4rem;
    background-color: #CE5DD0;
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
        background-color: #CE5DD0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 2rem !important;
    }
`;

export const Search = styled.input ` 
    background-color: #CE5DD0;
    width: 18rem;
    height: 4rem;
    border: 0;
    outline: 0;
    font-size: 2rem;
    color: white;
    font-weight: bold;

    @media ${(props) => props.theme.breakpoints.md} { 
        width: 14rem;
        font-size: 2rem;

        &::placeholder { 
            color: white;
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
        color: white;
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
    width: 19rem;
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
        margin-bottom: 3rem !important; 
    }
`

export const CardTitle = styled.div ` 
    width: 19rem;
    height: 5rem;
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
    width: 100%;
    height: 6.5rem;
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
    background-color: #CE5DD0;
    background: #CE5DD0;
    border: 3px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    width: 10rem;
    height: 3rem;
    margin-left: 1rem !important;
    margin-right: 0.5rem !important;
    cursor: pointer;
    font-weight: bold;
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.5rem;
`;