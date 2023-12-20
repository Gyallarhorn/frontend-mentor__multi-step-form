import React from 'react';
import {
  ConfirmCardWrapper,
  ConfirmSection,
  ConfirmText,
} from '../../Components/Confirm/StyledConfirm';
import { Container } from '../../globalStyles';
import { NotFoundLink, NotFoundTitle } from './StyledNotFound';

function NotFound() {
  return (
    <ConfirmSection>
      <Container>
        <ConfirmCardWrapper>
          <NotFoundTitle>Oops! Looks Like You&rsquo;ve Ventured into the Unknown</NotFoundTitle>
          <ConfirmText as="p">404: The page seems to&nbsp;have taken a&nbsp;vacation from the web. While we&nbsp;send a&nbsp;virtual postcard asking it&nbsp;to&nbsp;return, why not explore nearby digital landscapes?</ConfirmText>
          <NotFoundLink to="/">Go back</NotFoundLink>
        </ConfirmCardWrapper>
      </Container>
    </ConfirmSection>
  );
}

export default NotFound;
