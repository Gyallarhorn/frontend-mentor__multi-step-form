import React, { useContext, useState } from 'react';
import {
  CardWrapper, Container, Text, Title,
} from '../../globalStyles';
import {
  ChangePriceButton,
  ChangePriceToggle,
  ChangePriceWrapper,
  InputIcon,
  InvalidPlanText,
  PlanInputsItem,
  PlanInputsList,
  PlanItemTitle,
  PlanPrice,
  PlanSection,
  Input,
} from './StyledPlan';
import price from '../../price';
import arcade from '../../assets/img/icon-arcade.svg';
import advanced from '../../assets/img/icon-advanced.svg';
import pro from '../../assets/img/icon-pro.svg';
import Footer from '../../Components/Footer/Footer';
import { DataContext } from '../../DataContext';

function Plan() {
  const { setData } = useContext(DataContext);
  const [year, setYear] = useState(false);
  const [choosenPlan, setPlan] = useState('');
  const [isError, setError] = useState(false);

  const handleInputClick = (e) => {
    if (e.target.classList.contains('plan-radio')) {
      setPlan(e.target.value);
    }
  };

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
        setYear(!year);
        break;
    }
  };

  const handleNextPageButtonClick = (cb) => {
    if (choosenPlan === '') {
      setError(true);
    } else {
      setData((prevData) => ({
        ...prevData,
        plan: choosenPlan,
        isYear: year,
      }));
      cb();
    }
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
            <PlanInputsList
              onClick={(e) => handleInputClick(e)}
            >
              <InvalidPlanText as="li" className={`${isError && 'error-text'}`}>Please, choose your plan</InvalidPlanText>
              <li>
                <Input className="plan-radio" type="radio" id="arcade" name="plan" value="arcade" />
                <PlanInputsItem htmlFor="arcade">
                  <InputIcon $url={arcade} />
                  <PlanItemTitle
                    $color="var(--primary-text-color)"
                    $fontSize="16px"
                    $fontWeight="500"
                  >
                    Arcade
                  </PlanItemTitle>
                  <PlanPrice $lineHeight="20px">{year ? `$${price.arcade * 10}/yr` : `$${price.arcade}/mo`}</PlanPrice>
                </PlanInputsItem>
              </li>
              <li>
                <Input className="plan-radio" type="radio" id="advanced" name="plan" value="advanced" />
                <PlanInputsItem htmlFor="advanced">
                  <InputIcon $url={advanced} />
                  <PlanItemTitle
                    $color="var(--primary-text-color)"
                    $fontSize="16px"
                    $fontWeight="500"
                  >
                    Advanced
                  </PlanItemTitle>
                  <PlanPrice $lineHeight="20px">{year ? `$${price.advanced * 10}/yr` : `$${price.advanced}/mo`}</PlanPrice>
                </PlanInputsItem>
              </li>
              <li>
                <Input className="plan-radio" type="radio" id="pro" name="plan" value="pro" />
                <PlanInputsItem htmlFor="pro">
                  <InputIcon $url={pro} />
                  <PlanItemTitle
                    $color="var(--primary-text-color)"
                    $fontSize="16px"
                    $fontWeight="500"
                  >
                    Pro
                  </PlanItemTitle>
                  <PlanPrice $lineHeight="20px">{year ? `$${price.pro * 10}/yr` : `$${price.pro}/mo`}</PlanPrice>
                </PlanInputsItem>
              </li>
            </PlanInputsList>
            <ChangePriceWrapper onClick={handleButtonClick}>
              <ChangePriceButton className={`btn ${!year ? 'active' : ''}`}>Monthly</ChangePriceButton>
              <ChangePriceToggle className={`btn ${year ? 'year' : ''}`} />
              <ChangePriceButton className={`btn ${year ? 'active' : ''}`}>Yearly</ChangePriceButton>
            </ChangePriceWrapper>
          </CardWrapper>
        </Container>
      </PlanSection>
      <Footer onButtonClick={handleNextPageButtonClick} />
    </>
  );
}

export default Plan;
