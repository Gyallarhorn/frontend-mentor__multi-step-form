import React, { useContext, useState } from 'react';
import {
  AddOnsCheckbox,
  AddOnsInputPrice,
  AddOnsInputText,
  AddOnsInputTitle,
  AddOnsLabel,
  AddOnsList,
  AddOnsSection,
} from './StyledAddOns';
import {
  CardWrapper,
  Container,
  Text,
  Title,
} from '../../globalStyles';
import { DataContext } from '../../DataContext';
import price from '../../price';
import checkIcon from '../../assets/img/icon-checkmark.svg';
import Footer from '../../Components/Footer/Footer';

function AddOns() {
  const { data, setData } = useContext(DataContext);
  const [choosenPlans, setPlan] = useState([]);

  const findPlan = (e) => {
    switch (e.target.name) {
      case 'online':
        return 'Online service';
      case 'storage':
        return 'Larger storage';
      default:
        return 'Customizable profile';
    }
  };

  const handleCheckBoxClick = (e) => {
    if (!(e.target && e.target.classList.contains('plan-checkbox'))) {
      return;
    }

    const clickedInput = findPlan(e);

    if (e.target.checked) {
      setPlan([...choosenPlans, clickedInput]);
    } else {
      setPlan(choosenPlans.filter((elem) => elem !== clickedInput));
    }
  };

  const handleNextButtonClick = (cb) => {
    setData((prevData) => ({
      ...prevData,
      addOns: [...choosenPlans],
    }));
    cb();
  };

  return (
    <>
      <AddOnsSection>
        <Container>
          <CardWrapper>
            <Title $margin="0 0 9px 0">Pick add-ons</Title>
            <Text
              as="p"
              $lineHeight="25px"
              $margin="0 0 22px 0"
              $fontSize="16px"
            >
              Add-ons help enhance your gaming experience.
            </Text>
            <AddOnsList onClick={(e) => handleCheckBoxClick(e)}>
              <li>
                <AddOnsCheckbox
                  type="checkbox"
                  id="online"
                  name="online"
                  $url={checkIcon}
                  className="plan-checkbox"
                />
                <AddOnsLabel htmlFor="online">
                  <AddOnsInputTitle
                    $color="var(--primary-text-color)"
                    $fontSize="14px"
                    $fontWeight="500"
                  >
                    Online service
                  </AddOnsInputTitle>
                  <AddOnsInputText>Access to multiplayer games</AddOnsInputText>
                  <AddOnsInputPrice>{data.isYear ? `+$${price['Online service'] * 10}/yr` : `+$${price['Online service']}/mo` }</AddOnsInputPrice>
                </AddOnsLabel>
              </li>
              <li>
                <AddOnsCheckbox
                  type="checkbox"
                  id="storage"
                  name="storage"
                  $url={checkIcon}
                  className="plan-checkbox"
                />
                <AddOnsLabel htmlFor="storage">
                  <AddOnsInputTitle
                    $color="var(--primary-text-color)"
                    $fontSize="14px"
                    $fontWeight="500"
                  >
                    Larger storage
                  </AddOnsInputTitle>
                  <AddOnsInputText>Extra 1TB of cloud save</AddOnsInputText>
                  <AddOnsInputPrice>{data.isYear ? `+$${price['Larger storage'] * 10}/yr` : `+$${price['Larger storage']}/mo` }</AddOnsInputPrice>
                </AddOnsLabel>
              </li>
              <li>
                <AddOnsCheckbox
                  type="checkbox"
                  id="custom"
                  name="custom"
                  $url={checkIcon}
                  className="plan-checkbox"
                />
                <AddOnsLabel htmlFor="custom">
                  <AddOnsInputTitle
                    $color="var(--primary-text-color)"
                    $fontSize="14px"
                    $fontWeight="500"
                  >
                    Customizable profile
                  </AddOnsInputTitle>
                  <AddOnsInputText>Custom theme on your profile</AddOnsInputText>
                  <AddOnsInputPrice>{data.isYear ? `+$${price['Customizable profile'] * 10}/yr` : `+$${price['Customizable profile']}/mo` }</AddOnsInputPrice>
                </AddOnsLabel>
              </li>
            </AddOnsList>
          </CardWrapper>
        </Container>
      </AddOnsSection>
      <Footer onButtonClick={(cb) => handleNextButtonClick(cb)} />
    </>
  );
}

export default AddOns;
