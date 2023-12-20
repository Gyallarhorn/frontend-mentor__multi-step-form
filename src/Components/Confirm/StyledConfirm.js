import styled from 'styled-components';
import {
  CardWrapper,
  Section,
  Text,
  Title,
} from '../../globalStyles';

const ConfirmSection = styled(Section)`
    margin: 0;

    @media (width >= 980px) {
        display: flex;
        flex-direction: column;
        grid-row: 1 / 3 ;
        align-items: center;
        justify-content: center;
    }
`;

const ConfirmCardWrapper = styled(CardWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;

    @media (width >= 980px) {
        padding: 0;
    }
`;

const ConfirmTitle = styled(Title)`
    position: relative;
    align-self: stretch;
    margin: 0 0 9px;
    text-align: center;

    &::before {
        position: absolute;
        top: -80px;
        left: 50%;
        width: 56px;
        height: 56px;
        content: '';
        background: url('./assets/img/icon-thank-you.svg') center no-repeat;
        background-size: contain;
        transform: translateX(-50%);
    }

    @media (width >= 980px) {
        margin: 0 0 14px;

        &::before { 
            top: -112px;
            width: 80px;
            height: 80px;
        }
    }
`;

const ConfirmText = styled(Text)`
    margin: 0;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
`;

export {
  ConfirmSection, ConfirmCardWrapper, ConfirmTitle, ConfirmText,
};
