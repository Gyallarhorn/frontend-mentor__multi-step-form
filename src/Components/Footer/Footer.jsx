import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { FooterContainer, FooterWrapper } from './StyledFooter';
import { BackButton, Button } from '../../globalStyles';

function Footer({ onButtonClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pages = ['/', '/plan', '/addOns', '/finishing'];

  const returnOnPreviousPage = () => {
    const page = pages.find((elem) => elem === location.pathname);
    navigate(pages[pages.indexOf(page) - 1]);
  };

  const moveOnNextPage = () => {
    const page = pages.find((elem) => elem === location.pathname);
    navigate(pages[pages.indexOf(page) + 1]);
  };

  const handleNextPageButtonClick = () => {
    onButtonClick(moveOnNextPage);
  };

  const isBack = () => (location.pathname !== '/');

  return (
    <FooterWrapper>
      <FooterContainer>
        <Button type="button" onClick={handleNextPageButtonClick}>Next Step</Button>
        {isBack() ? <BackButton type="button" onClick={returnOnPreviousPage}>Go Back</BackButton> : ''}
      </FooterContainer>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Footer;
