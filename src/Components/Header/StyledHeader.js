import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container, Text } from '../../globalStyles';

const HeaderSection = styled.header`
    min-height: 172px;
    padding: 32px 0;
    background: url('/assets/img/bg-sidebar-mobile.svg') center no-repeat;
    background-size: cover;

    @media (width >= 980px) {
        grid-row: 1 / 3 ;
        min-height: auto;
        padding: 40px 32px;
        background: url('/assets/img/bg-sidebar-desktop.svg') center no-repeat;
        border-radius: 10px;
    }
`;

const HeaderListWrapper = styled(Container).attrs({ as: 'ul' })`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: center;
    list-style: none;
    counter-reset: headerCount 0;

    @media (width >= 980px) {
        flex-direction: column;
        gap: 32px;
        align-items: start;
    }
`;

const HeaderListItem = styled.li`
    counter-increment: headerCount 1;
`;

const HeaderNavLink = styled(NavLink)`
    position: relative;
    display: flex;
    gap: 16px;
    align-items: center;
    pointer-events: none;

    &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33px;
        height: 33px;
        font-size: 14px;
        font-weight: 700;
        line-height: normal;
        color: white;
        letter-spacing: 1px;
        content: counter(headerCount);
        border: 1px solid white;
        border-radius: 50%;
    }

    &.active::before {
        color: var(--primary-text-color);
        background-color: var(--secondary-background);
        border-color: transparent;
    }

    & span {
        display: none;
    }

    @media (width >= 980px) {
        & span {
            display: flex;
        }
    }
       
    
`;

const StepText = styled(Text)`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;

    &::before {
        font-size: 12px;
        font-weight: 400;
        color: var(--tertiary-text-color);
        content: 'step ' counter(headerCount);
    }

    @media (width >= 980px) {
        margin: 0;
        font-size: 14px;
        line-height: normal;
    }
`;

export {
  HeaderSection, HeaderNavLink, HeaderListWrapper, StepText, HeaderListItem,
};
