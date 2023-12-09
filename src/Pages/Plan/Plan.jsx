import React, { useState } from 'react';
import {
  CardWrapper, Container, Text, Title,
} from '../../globalStyles';
import {
  ChangePriceButton,
  ChangePriceToggle,
  ChangePriceWrapper,
  InputIcon, PlanInputsItem, PlanInputsList, PlanItemTitle, PlanPrice, PlanSection, Radio,
} from './StyledPlan';
import price from '../../price';
import arcade from '../../assets/img/icon-arcade.svg';
import advanced from '../../assets/img/icon-advanced.svg';
import pro from '../../assets/img/icon-pro.svg';
import Footer from '../../Components/Footer/Footer';

function Plan() {
  const [isYear, setYear] = useState(false);

  const handleButtonClick = (e) => {
    if (!(e.target && e.target.closest('.btn'))) {
      return;
    }

    switch (e.target.textContent) {
      case 'Monthly':
        setYear(false);
        break;
      case 'Yearly':
        setYear(true);
        break;
      default:
        setYear(!isYear);
        break;
    }
  };

  const HandleNextPageButtonClick = () => {
    console.log('Я работаю');
  };

  return (
    <>
      <PlanSection>
        <Container>
          <CardWrapper>
            <Title $margin="0 0 9px 0">Select your plan</Title>
            <Text
              as="p"
              $lineHeight="25px"
              $margin="0 0 22px 0"
              $fontSize="16px"
            >
              You have the option of monthly or yearly billing.
            </Text>
            <PlanInputsList>
              <li>
                <Radio type="radio" id="arcade" name="plan" value="arcade" />
                <PlanInputsItem htmlFor="arcade" tabIndex={0}>
                  <InputIcon $url={arcade} />
                  <PlanItemTitle
                    $color="var(--primary-text-color)"
                    $fontSize="16px"
                    $fontWeight="500"
                  >
                    Arcade
                  </PlanItemTitle>
                  <PlanPrice $lineHeight="20px">{isYear ? `$${price.arcade * 10}/yr` : `$${price.arcade}/mo`}</PlanPrice>
                </PlanInputsItem>
              </li>
              <li>
                <Radio type="radio" id="advanced" name="plan" value="advanced" />
                <PlanInputsItem htmlFor="advanced" tabIndex={0}>
                  <InputIcon $url={advanced} />
                  <PlanItemTitle
                    $color="var(--primary-text-color)"
                    $fontSize="16px"
                    $fontWeight="500"
                  >
                    Advanced
                  </PlanItemTitle>
                  <PlanPrice $lineHeight="20px">{isYear ? `$${price.advanced * 10}/yr` : `$${price.advanced}/mo`}</PlanPrice>
                </PlanInputsItem>
              </li>
              <li>
                <Radio type="radio" id="pro" name="plan" value="pro" />
                <PlanInputsItem htmlFor="pro" tabIndex={0}>
                  <InputIcon $url={pro} />
                  <PlanItemTitle
                    $color="var(--primary-text-color)"
                    $fontSize="16px"
                    $fontWeight="500"
                  >
                    Pro
                  </PlanItemTitle>
                  <PlanPrice $lineHeight="20px">{isYear ? `$${price.pro * 10}/yr` : `$${price.pro}/mo`}</PlanPrice>
                </PlanInputsItem>
              </li>
            </PlanInputsList>
            <ChangePriceWrapper onClick={handleButtonClick}>
              <ChangePriceButton className={`btn ${!isYear ? 'active' : ''}`}>Monthly</ChangePriceButton>
              <ChangePriceToggle className={`btn ${isYear ? 'year' : ''}`} />
              <ChangePriceButton className={`btn ${isYear ? 'active' : ''}`}>Yearly</ChangePriceButton>
            </ChangePriceWrapper>
          </CardWrapper>
        </Container>
      </PlanSection>
      <Footer onButtonClick={HandleNextPageButtonClick} />
    </>
  );
}

export default Plan;
