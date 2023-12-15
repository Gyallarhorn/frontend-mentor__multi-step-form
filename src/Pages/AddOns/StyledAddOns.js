import styled from 'styled-components';
import { Section, Text } from '../../globalStyles';
import { Input } from '../Plan/StyledPlan';

const AddOnsSection = styled(Section)`
    margin: 0;

    @media (width >= 980px) {
        margin: 0 0 50px;
    }
`;

const AddOnsList = styled.ul`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 12px;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (width >= 980px) {
        gap: 16px;
    }
`;

const AddOnsCheckbox = styled(Input)`
    & + label::before {
        position: absolute;
        top: 50%;
        left: 16px;
        width: 20px;
        height: 20px;
        content: '';
        background-color: white;
        border: 1px solid var(--border-color);
        border-radius: 3px;
        transition: background-color 0.5s ease,
                    border-color 0.5s ease;
        transform: translateY(-50%);
    }

    & + label::after {
        position: absolute;
        top: 50%;
        left: 16px;
        width: 20px;
        height: 20px;
        content: '';
        background: url(${({ $url }) => $url}) center no-repeat;
        border-radius: 3px;
        transform: translateY(-50%);
    }

    &:checked + label::before {
        background-color: var(--active-border-color);
        border-color: transparent;
    }

    @media (width >= 980px) {
        & + label::before,
        & + label::after {
            left: 24px;
        }
    }
`;

const AddOnsLabel = styled.label`
    position: relative;
    display: grid;
    grid-template-rows: repeat(2, min-content);
    grid-template-columns: 1fr min-content;
    gap: 0 16px;
    align-items: center;
    height: 100%;
    padding: 13px 16px 10px 52px;
    cursor: pointer;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: border-color .5s ease,
                background-color .5s ease;

    &:hover {
        background-color: var(--tertiary-background-color);
    }

    @media (width >= 980px) {
        padding: 15px 24px 19px 68px;
    }
`;

const AddOnsInputTitle = styled(Text)`
    margin: 0 0 3px;

    @media (width >= 980px) {
        margin: 0 0 7px;
        line-height: normal;
    }
`;

const AddOnsInputText = styled(Text)`
    grid-area: 2 / 1 / -1 / 2;
    font-size: 12px;
    line-height: 20px;

    @media (width >= 980px) {
        margin: 0;
        font-size: 15px;
    }
`;

const AddOnsInputPrice = styled(Text)`
    grid-row: 1 / -1;
    justify-self: end;
    font-size: 12px;
    line-height: 20px;
    color: var(--active-border-color);

    @media (width >= 980px) {
        margin: 0;
        font-size: 15px;
    }
`;

export {
  AddOnsSection,
  AddOnsList, AddOnsLabel, AddOnsCheckbox, AddOnsInputTitle, AddOnsInputText, AddOnsInputPrice,
};
