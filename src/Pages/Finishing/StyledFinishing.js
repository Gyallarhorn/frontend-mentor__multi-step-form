import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Section, Text } from '../../globalStyles';

const FinishingSection = styled(Section)`
    @media (width >= 980px) {
        margin: 0 0 50px;
    }
`;

const ChoosenElements = styled.div`
    padding: 16px;
    margin: 0 0 24px;
    background-color: var(--tertiary-background-color);
    border-radius: 8px;

    @media (width >= 980px) {
        padding: 16px 24px 24px;
    }
`;

const TopSection = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr min-content;
    column-gap: 15px;
    align-items: center;
    padding: 0 0 12px;

    @media (width >= 980px) {
        padding: 0 0 24px;
    }
`;

const TopSectionTitle = styled(Text)`
    @media (width >= 980px) {
        margin: 0 0 7px;
        line-height: normal;
    }
`;

const ChangePlanLink = styled(Link)`
    position: relative;
    grid-area: 2 / 1 / -1 / 2;
    justify-self: start;
    font-size: 14px;
    line-height: 20px;
    color: var(--secondary-text-color);
    transition: color .3s ease;

    &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        content: '';
        background-color: var(--secondary-text-color);
        transition: background-color .3s ease;
    }

    &:hover {
        color: var(--active-border-color);
    }

    &:hover::before {
        background-color: var(--active-border-color);
    }
`;

const FinishingPrice = styled(Text)`
    grid-area: 1 / 2 / -1 / -1;
    font-weight: 700;
    line-height: 20px;
    color: var(--primary-text-color);

    @media (width >= 980px) {
        margin: 0;
    }
`;

const AddOnsList = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 0 0;
    margin: 0;
    list-style: none;
    
    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        content: '';
        background-color: var(--secondary-text-color);
        opacity: 0.2;
    }
    
    @media (width >= 980px) {
        gap: 16px;
        padding: 16px 0 0;
    }
`;

const AddOnsListItem = styled.li`
    display: flex;
    gap: 12px;
    justify-content: space-between;
`;

const AddOn = styled(Text)`
    line-height: 20px;

    @media (width >= 980px) {
        margin: 0;
        font-size: 14px;
    }
`;

const AddOnPrice = styled(Text)`
    line-height: 20px;
    color: var(--primary-text-color);

    @media (width >= 980px) {
        margin: 0;
        font-size: 14px;
    }
`;

const TotalSection = styled.div`
    display: flex;
    gap: 12px;
    justify-content: space-between;
    padding: 0 16px;
`;

const TotalPriceTitle = styled(Text)`
    line-height: 20px;

    @media (width >= 980px) {
        margin: 0;
        font-size: 14px;
    }
`;

const TotalPrice = styled(Text)`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: var(--active-border-color);

    @media (width >= 980px) {
        margin: 0;
        font-size: 20px;
    }
`;

export {
  FinishingSection,
  ChoosenElements,
  TopSection,
  TopSectionTitle,
  ChangePlanLink,
  FinishingPrice,
  AddOnsList,
  AddOnsListItem,
  AddOn,
  AddOnPrice,
  TotalSection,
  TotalPriceTitle,
  TotalPrice,
};
