import React from 'react';
import PropTypes from 'prop-types';
import { FooterContainer, FooterWrapper } from './StyledFooter';
import { BackButton, Button } from '../../globalStyles';

function Footer({ onButtonClick }) {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Button type="button">Nex Step</Button>
        <BackButton type="button" onClick={onButtonClick}>Go Back</BackButton>
      </FooterContainer>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Footer;
