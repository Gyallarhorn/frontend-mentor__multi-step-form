import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    background-color: var(--background-trasparent-color);
    backdrop-filter: blur(10px);
`;

const LoaderElement = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid white;
    border-bottom-color: var(--active-border-color);
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
`;

export { LoaderContainer, LoaderElement };
