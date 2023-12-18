import styled from 'styled-components';
import { Button, Container } from '../../globalStyles';

const FooterWrapper = styled.footer`
    align-self: end;
    background-color: white;
`;

const FooterContainer = styled(Container)`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    @media (width >= 980px) {
        padding: 0;
    }
`;

const SubmitButton = styled(Button)`
    background-color: var(--active-border-color);

    &:hover {
        background-color: var(--submit-button-hover);
    }
`;

export { FooterWrapper, FooterContainer, SubmitButton };
