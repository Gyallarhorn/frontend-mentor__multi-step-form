import styled, { createGlobalStyle } from 'styled-components';

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

    @media (width >= 980px) {
        grid-template-rows: auto;
        grid-template-columns: 274px 1fr;
        column-gap: 100px;
        max-width: 940px;
        padding: 16px 100px 16px 16px;
        background-color: white;
        border-radius: 15px;
        box-shadow: var(--box-shadow);
    }
`;

const Text = styled.span`
    margin: ${({ margin }) => (margin || '')};
    font-size: ${({ fontSize }) => (fontSize || '14px')};
    font-weight: ${({ fontWeight }) => (fontWeight || '400')};
    line-height: ${({ lineHeight }) => (lineHeight || 'normal')};
    color: ${({ color }) => (color || 'var(--secondary-text-color)')};
    text-transform: ${({ transform }) => (transform ? 'uppercase' : '')};
    letter-spacing: ${({ letterSpacing }) => (letterSpacing ? '1px' : '')};

    @media (width >= 980px) {
        margin: 0 0 35px;
        font-size: 16px;
        line-height: 25px;
    }
`;

const CardWrapper = styled.div`
    padding: 24px 32px;
    background-color: white;
    border-radius: 10px;
    box-shadow: var(--box-shadow);

    
    @media (width >= 980px) {
        padding: 40px 0 0;
        box-shadow: none;
    }
`;

const Title = styled.h1`
    margin: ${({ margin }) => (margin || '0')};
    font-size: ${({ fontSize }) => (fontSize || '24px')};
    font-weight: ${({ fontWeight }) => (fontWeight || '700')};
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

export {
  GlobalStyle, Container, Text, ContentWrapper, CardWrapper, Title, Section,
};
