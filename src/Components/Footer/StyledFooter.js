import styled from 'styled-components';
import { Container } from '../../globalStyles';

const FooterWrapper = styled.footer`
    background-color: white;;
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

export { FooterWrapper, FooterContainer };
