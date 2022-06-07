import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div ` 
    display: none;

    @media ${(props) => props.theme.breakpoints.md} { 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-self: center;
        bottom: 0rem;
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    }
`

export const Links = styled.div ` 
    display: none;

    @media ${(props) => props.theme.breakpoints.md} { 
        display: flex;
        min-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 4rem;
    }
`;

export const LinkMenu = styled(Link) ` 
    display: none;

    @media ${(props) => props.theme.breakpoints.md} { 
        font-family: ${(props) => props.theme.fonts.main};
        font-style: bold;
        font-weight: 400;
        font-size: 29px;
        line-height: 33px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        text-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
        text-decoration: none;
    }
`;

export const ContentLink = styled.div `  
    display: none;

    @media ${(props) => props.theme.breakpoints.md} { 
        display: block;
        background: #CE5DD0;
        border: 7px solid #000000;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        margin-top: -3rem !important;
        margin-bottom: 1rem !important;
        width: 5rem;
        -moz-border-radius: 70px; 
        -webkit-border-radius: 70px; 
        border-radius: 70px;
    }
`;

export const StyledLink = styled(Link) ` 
    display: none;

    @media ${(props) => props.theme.breakpoints.md} { 
        font-family: ${(props) => props.theme.fonts.main};
        font-style: bold;
        font-weight: 400;
        font-size: 29px;
        line-height: 33px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        padding-top: 0.5rem !important;
        text-decoration: none;
    }
`;