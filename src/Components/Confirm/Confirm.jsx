/* eslint-disable max-len */
import React from 'react';
import {
  ConfirmCardWrapper, ConfirmSection, ConfirmText, ConfirmTitle,
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
              Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
            </ConfirmText>
          </ConfirmCardWrapper>
        </Container>
      </ConfirmSection>
      <Fireworks />
    </>
  );
}

export default Confirm;
