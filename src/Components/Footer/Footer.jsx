import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FooterContainer, FooterWrapper } from './StyledFooter';
import { BackButton, Button } from '../../globalStyles';

function Footer({ onButtonClick }) {
  const location = useLocation();

  const isBack = () => (location.pathname !== '/');

  return (
    <FooterWrapper>
      <FooterContainer>
        <Button type="button" onClick={onButtonClick}>Next Step</Button>
        {isBack() ? <BackButton type="button">Go Back</BackButton> : ''}
      </FooterContainer>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Footer;
