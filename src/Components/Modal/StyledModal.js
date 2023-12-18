import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    pointer-events: none;
    visibility: hidden;
    background-color: var(--background-trasparent-color);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: opacity 0.7s ease;

    &.active-modal {
        pointer-events: all;
        visibility: visible;
        opacity: 1;
    }

    &.active-modal div {
        transform: translateY(0);
    }
`;

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    max-width: 600px;
    padding: 32px 24px;
    background-color: white;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    transition: transform 0.7s ease;
    transform: translateY(50px);
`;

const ModalIcon = styled.span`
    font-size: 70px;
    line-height: normal;
`;

const ModalText = styled(Text)`
    margin: 0;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
`;

const ModalLink = styled(Link)`
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
    color: white;
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

export {
  Modal, ModalBody, ModalIcon, ModalText, ModalLink,
};
