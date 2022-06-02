import styled from 'styled-components';

export const Content = styled.div ` 
    display: none;

    @media ${(props) => props.theme.breakpoints.sm} { 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-self: center;
        bottom: 0;
    }
`