/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../globalStyles';
import {
  Modal,
  ModalBody,
  ModalIcon,
  ModalLink,
  ModalText,
} from './StyledModal';

function ModalComponent({ dataError, loaderError }) {
  const message = loaderError
    ? 'Unfortunately, an error occurred while sending the data, go back to the main page and try again later. If the error persists, please contact us by mail contactgyallarhorn@mail.com . We apologize for the inconvenience.'
    : 'Stay worry, don\'t calm! Just kidding, pal. You probably forgot to provide your details or choose a plan. Let\'s go back to the main page and try again.';

  return (
    <Modal role="dialog" aria-modal="true" className={`${dataError || loaderError ? 'active-modal' : ''}`}>
      <Container>
        <ModalBody>
          <ModalIcon>🫠</ModalIcon>
          <ModalText as="p">{message}</ModalText>
          <ModalLink tabIndex={`${dataError || loaderError ? 0 : -1}`} to="/">Go back</ModalLink>
        </ModalBody>
      </Container>
    </Modal>
  );
}

ModalComponent.propTypes = {
  dataError: PropTypes.bool.isRequired,
  loaderError: PropTypes.bool.isRequired,
};

export default ModalComponent;
