import styled from 'styled-components';
import { Section, Text } from '../../globalStyles';

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
    color: var(--primary-text-color);
    border: 1px solid var(--border-color);
    border-radius: 4px;

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

    @media (width >= 980px) {
        font-size: 16px; 
    }
`;

export {
  InfoLabel, Input, InputWrapper, InfoSection,
};
