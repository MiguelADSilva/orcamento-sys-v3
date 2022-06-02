import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div `
    height: 8rem;
    background-color: #F8C982;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media ${(props) => props.theme.breakpoints.sm} { 
        height: 8rem;
        background-color: #F8C982;
        align-items: center;
    }
`;

export const Navigation = styled.div ` 
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media ${(props) => props.theme.breakpoints.sm} { 
        justify-content: center;
    }
`;

export const HeaderS = styled.div ` 
    display: flex;
    width: 20rem;
    height: 7rem;
    background-color: #454040;
    justify-content: center;
    margin-left: -2.813rem !important;

    @media ${(props) => props.theme.breakpoints.sm} { 
        width: 20rem;
        height: 5.688rem;
        margin-left: 0rem !important;
        justify-content: center;
    }
`;

export const Title = styled.h1 ` 
    color: white;
    align-self: center;
    font-family: ${(props) => props.theme.fonts.main};
`;

export const Links = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 40rem;
    margin-left: 5rem !important;

    @media ${(props) => props.theme.breakpoints.sm} { 
        display: none;
    }
`;

export const StyledLink = styled(Link)` 
    font-size: 0.8rem;
    margin-right: 3rem !important;
    font-family: ${(props) => props.theme.fonts.secondary};
    text-decoration: none;

    @media ${(props) => props.theme.breakpoints.sm} { 
        display: none;
    }

    &:visited { 
        color: black;
    }

    &:hover {
        border-bottom: 5px solid #7000FF
        ;
    }
`;