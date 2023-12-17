import styled, { keyframes } from 'styled-components';

const fireworkAnimation = keyframes`
    0% {
        transform: translate(var(--x), var(--initial-y));
        width: var(--initial-size);
        opacity: 1;
    }
    50% {
        width: 0.5vmin;
        opacity: 1;
    }
    100% {
        width: var(--final-size);
        opacity: 0;
    }
`;

const Firework = styled.div`
    &,
    &::before,
    &::after {
        --initial-size: 0.5vmin;
        --final-size: 45vmin;
        --particle-size: 0.2vmin;
        --color1: yellow;
        --color2: khaki;
        --color3: white;
        --color4: lime;
        --color5: gold;
        --color6: mediumseagreen;
        --y: -30vmin;
        --x: -50%;
        --initial-y: 60vmin;

        position: absolute;
        top: 50%;
        left: 50%;
        width: var(--initial-size);
        aspect-ratio: 1;
        content: "";
        background:
        radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 50% 0%, radial-gradient(circle, var(--color2) var(--particle-size), #0000 0) 100% 50%, radial-gradient(circle, var(--color3) var(--particle-size), #0000 0) 50% 100%, radial-gradient(circle, var(--color4) var(--particle-size), #0000 0) 0% 50%, /* bottom right */
        radial-gradient(circle, var(--color5) var(--particle-size), #0000 0) 80% 90%, radial-gradient(circle, var(--color6) var(--particle-size), #0000 0) 95% 90%, radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 90% 70%, radial-gradient(circle, var(--color2) var(--particle-size), #0000 0) 100% 60%, radial-gradient(circle, var(--color3) var(--particle-size), #0000 0) 55% 80%, radial-gradient(circle, var(--color4) var(--particle-size), #0000 0) 70% 77%,
        radial-gradient(circle, var(--color5) var(--particle-size), #0000 0) 22% 90%, radial-gradient(circle, var(--color6) var(--particle-size), #0000 0) 45% 90%, radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 33% 70%, radial-gradient(circle, var(--color2) var(--particle-size), #0000 0) 10% 60%, radial-gradient(circle, var(--color3) var(--particle-size), #0000 0) 31% 80%, radial-gradient(circle, var(--color4) var(--particle-size), #0000 0) 28% 77%, radial-gradient(circle, var(--color5) var(--particle-size), #0000 0) 13% 72%, 
        radial-gradient(circle, var(--color6) var(--particle-size), #0000 0) 80% 10%, radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 95% 14%, radial-gradient(circle, var(--color2) var(--particle-size), #0000 0) 90% 23%, radial-gradient(circle, var(--color3) var(--particle-size), #0000 0) 100% 43%, radial-gradient(circle, var(--color4) var(--particle-size), #0000 0) 85% 27%, radial-gradient(circle, var(--color5) var(--particle-size), #0000 0) 77% 37%, radial-gradient(circle, var(--color6) var(--particle-size), #0000 0) 60% 7%, 
        radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 22% 14%, radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 45% 20%, radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 33% 34%, radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 10% 29%, radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 31% 37%, radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 28% 7%, radial-gradient(circle, var(--color1) var(--particle-size), #0000 0) 13% 42%;
        background-repeat: no-repeat;
        background-size: var(--initial-size) var(--initial-size);
        transform: translate(-50%, var(--y));
        animation: ${fireworkAnimation} 2s infinite;
    }

    &::before {
        --x: -50%;
        --y: -50%;
        --initial-y: -50%;

        transform: translate(-50%, -50%) rotate(40deg) scale(1.3) rotateY(40deg);
    }

    &::after {
        --x: -50%;
        --y: -50%;
        --initial-y: -50%;

        transform: translate(-50%, -50%) rotate(170deg) scale(1.15) rotateY(-30deg);
    }

    &:nth-child(2) {
        --x: 30vmin;
    }

    &:nth-of-type(2),
    &:nth-of-type(2)::before,
    &:nth-of-type(2)::after {
        --color1: pink;
        --color2: violet;
        --color3: fuchsia;
        --color4: orchid;
        --color5: plum;
        --color6: lavender;
        --final-size: 40vmin;

        top: 60%;
        left: 30%;
        animation-delay: -0.25s;
    }

    &:nth-of-type(3) {
        --x: -30vmin;
        --y: -50vmin;
    }

    &:nth-of-type(3),
    &:nth-of-type(3)::before,
    &:nth-of-type(3)::after {
        --color1: cyan;
        --color2: lightcyan;
        --color3: lightblue;
        --color4: paleturquoise;
        --color5: skyblue;
        --color6: lavender;
        --final-size: 35vmin;

        top: 60%;
        left: 70%;
        animation-delay: -0.4s;
    }
`;

export default Firework;
