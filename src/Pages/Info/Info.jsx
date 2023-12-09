import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardWrapper, Container, Text, Title,
} from '../../globalStyles';
import {
  InfoLabel, Input, InputWrapper, InfoSection, InvalidText,
} from './StyledInfo';
import Footer from '../../Components/Footer/Footer';
import { DataContext } from '../../DataContext';

function Info() {
  const { data, setData } = useContext(DataContext);
  const [personalData, setPersonalData] = useState({
    name: { value: data.name, isEmpty: false, isError: false },
    mail: { value: data.email, isEmpty: false, isError: false },
    number: { value: data.number, isEmpty: false, isError: false },
  });

  const navigate = useNavigate();

  const handleInputChange = (fieldName, e) => {
    setPersonalData((prevData) => ({
      ...prevData,
      [fieldName]: { ...prevData[fieldName], value: e.target.value },
    }));
  };

  const handleInputFocus = (fieldName) => {
    if (personalData[fieldName].isEmpty || personalData[fieldName].isError) {
      setPersonalData((prevData) => ({
        ...prevData,
        [fieldName]: { ...prevData[fieldName], isEmpty: false, isError: false },
      }));
    }
  };

  const handleErrorChange = (fieldName, errorName, value) => {
    setPersonalData((prevData) => ({
      ...prevData,
      [fieldName]: { ...prevData[fieldName], [errorName]: value },
    }));
  };

  const handleNumberInputChange = (fieldName, e) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    const formattedValue = `+${inputValue.slice(0, 1)} ${inputValue.slice(1, 4)} ${inputValue.slice(4, 7)} ${inputValue.slice(7, 11)}`;
    e.target.value = formattedValue.trim();
    handleInputChange(fieldName, e);
  };

  const inputRegExp = {
    name: /^[A-Za-z'\s]+$/,
    mail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    number: /^\+\d{11}/,
  };

  const checkEmpyInput = () => Object.keys(personalData).every((key) => {
    const { value } = personalData[key];
    return value !== '';
  });

  const checkInputValidity = () => Object.keys(personalData).every((key) => {
    let { value } = personalData[key];
    const regExp = inputRegExp[key];
    value = value.replace(/\s/g, '');
    return regExp.test(value);
  });

  const findEmptyInputs = () => Object.keys(personalData).filter((key) => {
    const { value } = personalData[key];
    return value === '';
  });

  const findInvalidInputs = () => Object.keys(personalData).filter((key) => {
    let { value } = personalData[key];
    const regExp = inputRegExp[key];
    if (key === 'number') {
      value = value.replace(/\s/g, '');
    }
    return (!regExp.test(value) && value);
  });

  const isValid = () => {
    if (checkEmpyInput() && checkInputValidity()) {
      setData((prevData) => ({
        ...prevData,
        name: personalData.name.value.replace(/\s+/g, ' ').trim(),
        email: personalData.mail.value.replace(/\s+/g, ' ').trim(),
        number: personalData.number.value.replace(/\s+/g, '').trim(),
      }));
      navigate('/plan');
    }

    if (!checkEmpyInput()) {
      const emptyInputs = findEmptyInputs();
      emptyInputs.forEach((elem) => handleErrorChange(elem, 'isEmpty', true));
    }

    if (!checkInputValidity()) {
      const invalidInputs = findInvalidInputs();
      if (invalidInputs.length > 0) {
        invalidInputs.forEach((elem) => handleErrorChange(elem, 'isError', true));
      }
    }
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
                className={`${personalData.name.isEmpty || personalData.name.isError ? 'error' : ''}`}
                value={personalData.name.value}
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
                required
                onChange={(e) => handleInputChange('name', e)}
                onFocus={() => handleInputFocus('name')}
                autoComplete="true"
              />
              <InvalidText className={`${personalData.name.isEmpty ? 'empty-field' : ''}`}>This field is required</InvalidText>
              <InvalidText className={`${personalData.name.isError ? 'error-text' : ''}`}>Please provide correct name</InvalidText>
            </InputWrapper>
            <InputWrapper>
              <InfoLabel htmlFor="mail">Email Address</InfoLabel>
              <Input
                className={`${personalData.mail.isEmpty || personalData.mail.isError ? 'error' : ''}`}
                value={personalData.mail.value}
                type="email"
                id="mail"
                placeholder="e.g. stephenking@lorem.com"
                required
                onChange={(e) => handleInputChange('mail', e)}
                onFocus={() => handleInputFocus('mail')}
                autoComplete="true"
              />
              <InvalidText className={`${personalData.mail.isEmpty ? 'empty-field' : ''}`}>This field is required</InvalidText>
              <InvalidText className={`${personalData.mail.isError ? 'error-text' : ''}`}>Please provide correct email</InvalidText>
            </InputWrapper>
            <InputWrapper>
              <InfoLabel htmlFor="tel">Phone Number</InfoLabel>
              <Input
                className={`${personalData.number.isEmpty || personalData.number.isError ? 'error' : ''}`}
                value={personalData.number.value}
                type="tel"
                id="tel"
                placeholder="e.g. +1 234 567 8900"
                required
                onChange={(e) => handleNumberInputChange('number', e)}
                onFocus={() => handleInputFocus('number')}
                autoComplete="true"
              />
              <InvalidText className={`${personalData.number.isEmpty ? 'empty-field' : ''}`}>This field is required</InvalidText>
              <InvalidText className={`${personalData.number.isError ? 'error-text' : ''}`}>Please provide correct number</InvalidText>
            </InputWrapper>
          </CardWrapper>
        </Container>
      </InfoSection>
      <Footer onButtonClick={isValid} />
    </>
  );
}

export default Info;
