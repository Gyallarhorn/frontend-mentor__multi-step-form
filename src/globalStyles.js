import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 400;
        src: url('/assets/fonts/Ubuntu-Regular.woff2'),
             url('/assets/fonts/Ubuntu-Regular.woff');
        font-display: swap;
    }

    @font-face {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        src: url('/assets/fonts/Ubuntu-Medium.woff2'),
             url('/assets/fonts/Ubuntu-Medium.woff');
        font-display: swap;
    }

    @font-face {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 700;
        src: url('/assets/fonts/Ubuntu-Bold.woff2'),
             url('/assets/fonts/Ubuntu-Bold.woff');
        font-display: swap;
    }

    html {
        height: 100%;
    }

    :root {
        --background-color: #eff5ff;
        --primary-text-color: #022959;
        --secondary-text-color: #9699aa;
        --tertiary-text-color: #abbcff;
        --secondary-background: #bee2fd;
        --box-shadow: 0px 25px 40px -20px rgb(0 0 0 / 10%);
        --border-color: #d6d9e6;
        --active-border-color: #483eff;
        --error-color: #ee374a;
        --button-hover-color: #164a8a;
        --tertiary-background-color: #f8f9ff;
        --submit-button-hover: #928cff;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
    }

    body {
        position: relative;
        min-width: 375px;
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: Ubuntu, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px; 
        color: var(--primary-text-color);
        background-color: var(--background-color);
    }

    #app {
        height: 100%;
    }

    @media (width >= 980px) {
        #app {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

const Container = styled.div`
    max-width: 812px;
    padding: 0 16px;
    margin: 0 auto;

    @media (width >= 980px) {
        max-width: none;
        padding: 0;
        margin: 0
    }
`;

const ContentWrapper = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    height: 100%;

    @media (width >= 980px) {
        grid-template-rows: auto;
        grid-template-columns: 274px 1fr;
        column-gap: 100px;
        width: 940px;
        height: auto;
        min-height: 600px;
        padding: 16px 100px 16px 16px;
        background-color: white;
        border-radius: 15px;
        box-shadow: var(--box-shadow);
    }
`;

const Text = styled.span`
    margin: ${({ $margin }) => ($margin || '')};
    font-size: ${({ $fontSize }) => ($fontSize || '14px')};
    font-weight: ${({ $fontWeight }) => ($fontWeight || '400')};
    line-height: ${({ $lineHeight }) => ($lineHeight || 'normal')};
    color: ${({ $color }) => ($color || 'var(--secondary-text-color)')};
    text-transform: ${({ $transform }) => ($transform ? 'uppercase' : '')};
    letter-spacing: ${({ $letterSpacing }) => ($letterSpacing ? '1px' : '')};
    word-wrap: break-word;

    @media (width >= 980px) {
        margin: 0 0 35px;
        font-size: 16px;
        line-height: 25px;
    }
`;

const CardWrapper = styled.div`
    padding: 32px 24px;
    background-color: white;
    border-radius: 10px;
    box-shadow: var(--box-shadow);

    
    @media (width >= 980px) {
        padding: 40px 0 0;
        box-shadow: none;
    }
`;

const Title = styled.h1`
    margin: ${({ $margin }) => ($margin || '0')};
    font-size: ${({ $fontSize }) => ($fontSize || '24px')};
    font-weight: ${({ $fontWeight }) => ($fontWeight || '700')};
    line-height: normal;
    color: var(--primary-text-color);

    @media (width >= 980px) {
        margin: 0 0 11px;
        font-size: 32px;
    }
`;

const Section = styled.section`
    position: relative;
    transform: translateY(-73px);

    @media (width >= 980px) {
        transform: translate(0, 0);
    }
`;

const Button = styled.button`
    padding: 12px 16px;
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    background-color: var(--primary-text-color);
    border: none;
    border-radius: 4px;
    transition: background-color .5s ease;

    &:hover,
    &:focus {
        background-color: var(--button-hover-color);
    }

    &:focus {
        outline: none;
    }

    @media (width >= 980px) {
        padding: 14px 24px;
        font-size: 16px;
        border-radius: 8px;
    }
`;

const BackButton = styled(Button)`
    color: var(--secondary-text-color);
    background: none;
    transition: color .5s ease;

    &:hover,
    &:focus {
        color: var(--primary-text-color);
        background: none;
    }

    &:focus {
        background: none;
        outline: none;
    }

    @media (width >= 980px) {
        padding: 14px 24px 14px 0;
    }
`;

const shake = keyframes`
    0% {
        opacity: 0;
        transform: translateX(0);
    }

    10% {
        opacity: 1;
        transform: translateX(5px);
    }

    20% {
        transform: translateX(-5px);
    }

    30% {
        transform: translateX(5px);
    }

    40% {
        transform: translateX(-5px);
    }

    50% {
        transform: translateX(5px);
    }

    60% {
        transform: translateX(-5px);
    }

    70% {
        transform: translateX(5px);
    }

    80% {
        transform: translateX(-5px);
    }

    90% {
        transform: translateX(5px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export {
  GlobalStyle,
  Container,
  Text,
  ContentWrapper,
  CardWrapper,
  Title,
  Section,
  Button,
  BackButton,
  shake,
};
