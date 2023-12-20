/* eslint-disable max-len */
import React from 'react';
import {
  ConfirmCardWrapper,
  ConfirmSection,
  ConfirmText,
  ConfirmTitle,
} from './StyledConfirm';
import { Container } from '../../globalStyles';
import Fireworks from '../Fireworks/Fireworks';

function Confirm() {
  return (
    <>
      <ConfirmSection>
        <Container>
          <ConfirmCardWrapper>
            <ConfirmTitle>Thank you!</ConfirmTitle>
            <ConfirmText as="p">
              Thanks for confirming your subscription! We&nbsp;hope you have fun using our platform. If&nbsp;you ever need support, please feel free to&nbsp;email&nbsp;us at&nbsp;support@loremgaming.com.
            </ConfirmText>
          </ConfirmCardWrapper>
        </Container>
      </ConfirmSection>
      <Fireworks />
    </>
  );
}

export default Confirm;
