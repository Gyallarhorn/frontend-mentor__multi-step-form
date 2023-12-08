import React, { useContext, useState } from 'react';
import {
  CardWrapper, Container, Text, Title,
} from '../../globalStyles';
import {
  InfoLabel, Input, InputWrapper, InfoSection,
} from './StyledInfo';
import Footer from '../../Components/Footer/Footer';
import { DataContext } from '../../DataContext';

function Info() {
  const { data } = useContext(DataContext);
  const [personalData, setPersonalData] = useState({
    nameField: { value: data.name, error: false },
    mailField: { value: data.email, error: false },
    numberField: { value: data.number, error: false },
  });

  const handleInputChange = (fieldName, e) => {
    setPersonalData((prevData) => ({
      ...prevData,
      [fieldName]: { ...prevData[fieldName], value: e.target.value },
    }));
  };

  const handleNumberInputChange = (fieldName, e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    const formattedValue = `+${inputValue.slice(0, 1)} ${inputValue.slice(1, 4)} ${inputValue.slice(4, 7)} ${inputValue.slice(7, 11)}`;
    e.target.value = formattedValue.trim();
    handleInputChange(fieldName, e);
  };

  const inputRegExp = {
    name: /^[A-Za-z]+$/,
    mail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    number: /^\+\d{11}/,
  };

  const checkEmpyInput = () => {
    const dataArray = Object.entries(personalData);
    const checkArray = dataArray.map((field) => ({
      [field[0]]: field[1].value,
    }));
    const fieldValues = checkArray
      .map((obj) => Object.values(obj))
      .reduce((acc, elem) => acc.concat(elem), []);
    const check = fieldValues.every((value) => value !== '');
    console.log(check);
  };

  return (
    <>
      <InfoSection>
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
              <Input
                value={personalData.nameField.value}
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
                required
                onChange={(e) => handleInputChange('nameField', e)}
              />
            </InputWrapper>
            <InputWrapper>
              <InfoLabel htmlFor="mail">Email Address</InfoLabel>
              <Input
                value={personalData.mailField.value}
                type="email"
                id="mail"
                placeholder="e.g. stephenking@lorem.com"
                required
                onChange={(e) => handleInputChange('mailField', e)}
              />
            </InputWrapper>
            <InputWrapper>
              <InfoLabel htmlFor="tel">Email Address</InfoLabel>
              <Input
                value={personalData.numberField.value}
                type="tel"
                id="tel"
                placeholder="e.g. +1 234 567 8900"
                required
                onChange={(e) => handleNumberInputChange('numberField', e)}
              />
            </InputWrapper>
          </CardWrapper>
        </Container>
      </InfoSection>
      <Footer onButtonClick={checkEmpyInput} />
    </>
  );
}

export default Info;
