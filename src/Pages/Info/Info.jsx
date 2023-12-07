import React from 'react';
import {
  CardWrapper, Container, Text, Title, Section,
} from '../../globalStyles';
import { InfoLabel, Input, InputWrapper } from './StyledInfo';

function Info() {
  return (
    <Section>
      <Container>
        <CardWrapper>
          <Title margin="0 0 9px 0">Personal Info</Title>
          <Text
            as="p"
            lineHeight="22px"
            margin="0 0 22px 0"
            fontSize="16px"
          >
            Please provide your name, email address, and phone number.
          </Text>
          <InputWrapper>
            <InfoLabel htmlFor="name">Name</InfoLabel>
            <Input type="text" id="name" placeholder="e.g. Stephen King" required />
          </InputWrapper>
          <InputWrapper>
            <InfoLabel htmlFor="mail">Email Address</InfoLabel>
            <Input type="email" id="mail" placeholder="e.g. stephenking@lorem.com" required />
          </InputWrapper>
          <InputWrapper>
            <InfoLabel htmlFor="tel">Email Address</InfoLabel>
            <Input type="tel" id="tel" placeholder="e.g. +1 234 567 890" required />
          </InputWrapper>
        </CardWrapper>
      </Container>
    </Section>

  );
}

export default Info;
