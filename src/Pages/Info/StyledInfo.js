import styled from 'styled-components';
import { Section, Text, shake } from '../../globalStyles';

const InfoSection = styled(Section)`
    margin: 0 0 47px;

    @media (width >= 980px) {
        margin: 0 0 92px;
    }
`;

const InfoLabel = styled(Text).attrs({ as: 'label' })`
    display: block;
    margin: 0 0 3px;
    font-size: 12px;
    color: var(--primary-text-color);

    @media (width >= 980px) {
        margin: 0 0 8px;
        font-size: 14px;
        line-height: normal;
    }
`;

const InputWrapper = styled.div`
    position: relative;

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    @media (width >= 980px) {
        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    font-family: Ubuntu, sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    color: var(--primary-text-color);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    transition: opacity .5s ease;

    &::placeholder {
        color: var(--secondary-text-color);
    }

    &:hover::placeholder {
        opacity: 0.7;
    }

    &:focus {
        border-color: var(--active-border-color);
        outline: none;
    }

    &.error {
        border-color: var(--error-color);
    }

    @media (width >= 980px) {
        font-size: 16px; 
        border-radius: 8px;
    }
`;

const InvalidText = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--error-color);
    opacity: 0;

    &.empty-field {
        animation: ${shake} 1.5s ease forwards;
    }

    &.error-text {
        animation: ${shake} 1.5s ease forwards;
    }

    @media (width >= 980px) {
        font-size: 14px; 
    }
`;

export {
  InfoLabel, Input, InputWrapper, InfoSection, InvalidText,
};
