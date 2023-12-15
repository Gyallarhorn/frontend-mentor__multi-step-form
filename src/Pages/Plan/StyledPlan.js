import styled from 'styled-components';
import { Button, Section, Text } from '../../globalStyles';
import { InvalidText } from '../Info/StyledInfo';

const PlanSection = styled(Section)`
    margin: 0;

    @media (width >= 980px) {
        margin: 0 0 50px;
    }
`;

const PlanInputsList = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
    margin: 0 0 24px;
    list-style: none;

    @media (width >= 980px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        margin: 0 0 32px;
    }
`;

const PlanInputsItem = styled.label`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 40px 1fr;
    gap: 7px 14px;
    align-items: center;
    padding: 14px;
    cursor: pointer;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    transition: border-color .5s ease,
                background-color .5s ease;

    &:hover,
    &:focus {
        background-color: var(--tertiary-background-color);
        outline: none;
    }

    @media (width >= 980px) {
        grid-template-rows: 40px 1fr auto;
        grid-template-columns: auto;
        gap: 7px;
        align-items: stretch;
        min-width: 138px;
        height: 100%;;
        padding: 20px 16px 16px;
    }
`;

const Input = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    white-space: nowrap;
    border: 0;

    &:checked + label,
    &:focus + label {
        background-color: var(--tertiary-background-color);
    }

    &:checked + label {
        border-color: var(--active-border-color);
    }
`;

const InputIcon = styled.span`
    display: block;
    grid-row: 1 / -1;
    width: 40px;
    height: 40px;
    background: url(${({ $url }) => $url}) center no-repeat;
    background-size: contain;

    @media (width >= 980px) {
        grid-row: 1 / 2;
    }
`;

const PlanPrice = styled(Text)`
    @media (width >= 980px) {
        margin: 0;
        font-size: 14px;
        line-height: 20px;
    }
`;

const PlanItemTitle = styled(Text)`
    @media (width >= 980px) {
        margin: 32px 0 0;
        line-height: normal;
    }
`;

const ChangePriceWrapper = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    background-color: var(--tertiary-background-color);
    border-radius: 8px;
`;

const ChangePriceButton = styled(Button)`
    position: relative;
    padding: 12px 0;
    color: var(--secondary-text-color);
    background: none;
    transition: color .5s ease,
                transform .5s ease;

    &.active {
        color: var(--primary-text-color);
    }

    &:hover,
    &:focus {
        background: none;
        transform: scale(1.1);
    }
`;

const ChangePriceToggle = styled.button`
    position: relative;
    width: 38px;
    height: 20px;
    cursor: pointer;
    background-color: var(--primary-text-color);
    border: none;
    border-radius: 40px;

    &::after {
        position: absolute;
        top: 50%;
        left: 4px;
        width: 12px;
        height: 12px;
        content: '';
        background-color: white;
        border-radius: 50%;
        transition: transform .5s ease;
        transform: translate(0, -50%);
    }

    &.year::after {
        transform: translate(19px, -50%);
    }
`;

const InvalidPlanText = styled(InvalidText)`
    top: -20px;
`;

export {
  PlanSection,
  PlanInputsList,
  PlanInputsItem,
  Input,
  InputIcon,
  PlanPrice,
  PlanItemTitle,
  ChangePriceWrapper,
  ChangePriceButton,
  ChangePriceToggle,
  InvalidPlanText,
};
