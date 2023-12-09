import styled from 'styled-components';
import { Button, Section, Text } from '../../globalStyles';

const PlanSection = styled(Section)`
    margin: 0;
`;

const PlanInputsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
    margin: 0 0 24px;
    list-style: none;
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
`;

const Radio = styled.input`
    display: none;

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
        margin: 0;
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

export {
  PlanSection,
  PlanInputsList,
  PlanInputsItem,
  Radio,
  InputIcon,
  PlanPrice,
  PlanItemTitle,
  ChangePriceWrapper,
  ChangePriceButton,
  ChangePriceToggle,
};
