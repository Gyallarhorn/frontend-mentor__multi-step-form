import styled from 'styled-components';
import { ConfirmTitle } from '../../Components/Confirm/StyledConfirm';
import { ModalLink } from '../../Components/Modal/StyledModal';

const NotFoundTitle = styled(ConfirmTitle)`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;

    &::before {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        width: 80px;
        height: 80px;
        background: url('./assets/img/portal.svg') center no-repeat;
        background-size: contain;
        transform: translateX(0);
    }
`;

const NotFoundLink = styled(ModalLink)`
    margin: 25px 0 0;
`;

export { NotFoundTitle, NotFoundLink };
