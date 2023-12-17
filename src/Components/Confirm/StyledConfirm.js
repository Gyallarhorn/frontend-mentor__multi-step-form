import styled from 'styled-components';
import {
  CardWrapper, Section, Text, Title,
} from '../../globalStyles';

const ConfirmSection = styled(Section)`
    margin: 0;
`;

const ConfirmCardWrapper = styled(CardWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
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
