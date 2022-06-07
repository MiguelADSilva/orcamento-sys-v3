    import styled from "styled-components";
    import { Autocomplete } from "@material-ui/lab";
    import { TextField } from "@material-ui/core";

    export const Content = styled.div` 
        display: flex;
        background-color: #F8C982;
        min-width: 100%;
        min-height: 100vh;
        flex-direction: column;
        align-items: center;

        @media ${(props) => props.theme.breakpoints.md} { 
            min-width: 100%;
            min-height: 100vh;
        }
    `;

    export const Input = styled.input` 

        background: #CE5DD0;
        border: 7px solid #000000;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        width: 20rem;
        height: 4rem;
        font-size: 2rem;
        padding-left: 1rem !important;
        color: white;
        margin-bottom: 2rem !important;

        &::placeholder { 
            width: 100%;
            font-size: 2rem;
            padding-left: 1rem !important;
            color: white;
            font-family: ${(props) => props.theme.fonts.main};
            font-weight: bold;
            margin-bottom: 2rem !important;
        }

        @media ${(props) => props.theme.breakpoints.md} { 
            background: #CE5DD0;
            border: 7px solid #000000;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            width: 20rem;
            height: 4rem;
            font-size: 2rem;
            padding-left: 1rem !important;
            color: white;
            margin-bottom: 2rem !important;

            &::placeholder { 
                width: 100%;
                font-size: 2rem;
                padding-left: 1rem !important;
                color: white;
                font-family: ${(props) => props.theme.fonts.main};
                font-weight: bold;
                margin-bottom: 2rem !important;
            }
        }
    `;

    export const DropDownContent = styled.div` 

        background: #CE5DD0;
        border: 7px solid #000000;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        width: 20rem;
        height: 4rem;
        font-size: 2rem;
        padding-left: 1rem !important;
        color: white;
        margin-bottom: 2rem !important;
        display: flex;
        flex-direction: column;
        align-content: center;

        &::placeholder { 
            width: 100%;
            font-size: 1.5rem;
            padding-left: 1rem !important;
            color: white;
            font-family: ${(props) => props.theme.fonts.main};
            font-weight: bold;
        }

        @media ${(props) => props.theme.breakpoints.md} { 
            background: #CE5DD0;
            border: 7px solid #000000;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            width: 20rem;
            height: 4rem;
            font-size: 2rem;
            padding-left: 1rem !important;
            color: white;
            margin-bottom: 2rem !important;
            display: flex;
            flex-direction: column;
            align-content: center;

            &::placeholder { 
                width: 100%;
                font-size: 1.5rem;
                padding-left: 1rem !important;
                color: white;
                font-family: ${(props) => props.theme.fonts.main};
                font-weight: bold;
            }
        }
    `;

    export const DropDownStyled = styled(Autocomplete)` 

        margin-top: 0.5rem !important;
        margin-right: 0.5rem !important;
            
        & .MuiInputBase-input {
            height: 3rem;
            border: none;
        }

        @media ${(props) => props.theme.breakpoints.md} {
            margin-top: 0.5rem !important;
            margin-right: 0.5rem !important;

            & .MuiInputBase-input {
                height: 3rem;
                border: none;
            }
        }
    `;

    export const TextFieldStyled = styled(TextField)` 
        @media ${(props) => props.theme.breakpoints.md} { }

    `;

    export const ContentPrice = styled.div` 

        @media ${(props) => props.theme.breakpoints.md} { 
            margin-bottom: 4rem !important;
        }

    `;

    export const BtnStyle = styled.button` 

        background-color: #CE5DD0;
        background: #CE5DD0;
        border: 3px solid #000000;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.50);
        border-radius: 9px;
        width: 10rem;
        height: 3rem;
        margin-left: 1rem !important;
        margin-right: 0.5rem !important;
        margin-bottom: 0.55rem !important;
        cursor: pointer;
        font-weight: bold;
        font-family: ${(props) => props.theme.fonts.main};
        font-size: 1.5rem;
        color: white;

        @media ${(props) => props.theme.breakpoints.md} { 
            margin-bottom: 10rem !important;
        }

    `;

    export const FooterContent = styled.div ` 
        display: none;
        
        @media ${(props) => props.theme.breakpoints.md} { 
            display: flex;
            width: 100%;
            z-index: 99999999;
            bottom: 0;
            position: fixed;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        }
    `;