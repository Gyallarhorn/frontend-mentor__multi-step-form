/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  AddOn,
  AddOnPrice,
  AddOnsList,
  AddOnsListItem,
  ChangePlanLink,
  ChoosenElements,
  FinishingPrice,
  FinishingSection,
  TopSection,
  TopSectionTitle,
  TotalPrice,
  TotalPriceTitle,
  TotalSection,
} from './StyledFinishing';
import {
  CardWrapper,
  Container,
  Text,
  Title,
} from '../../globalStyles';
import Footer from '../../Components/Footer/Footer';
import { DataContext } from '../../DataContext';
import price from '../../price';
import Confirm from '../../Components/Confirm/Confirm';
import Loader from '../../Components/Loader/Loader';
import ModalComponent from '../../Components/Modal/Modal';

function Finishing() {
  const { data, countTotal } = useContext(DataContext);
  const [isError, setError] = useState(false);
  const [isConfirm, setConfirm] = useState(false);
  const [loader, setLoader] = useState({
    isLoading: false,
    isError: false,
  });

  const { addOns } = data;
  const plan = `${data.plan ? data.plan.substring(0, 1).toUpperCase() + data.plan.substring(1) : 'None'} (${data.isYear ? 'Yearly' : 'Monthly'})`;
  let planPrice = data.isYear ? price[data.plan] * 10 : price[data.plan];

  if (planPrice) {
    planPrice = `$${planPrice}${data.isYear ? '/yr' : '/mo'}`;
  } else {
    planPrice = '$0';
  }

  const checkEmptyData = () => Object.keys(data).some((elem) => data[elem] === '');

  const handleConfirmButtonClick = () => {
    if (checkEmptyData()) {
      setError(true);
      return;
    }

    setLoader((prevData) => ({
      ...prevData,
      isLoading: true,
    }));
  };

  useEffect(() => {
    const sendData = async () => {
      if (!loader.isLoading) {
        return;
      }

      const templateParams = {
        to_name: 'Tim',
        from_name: data.name,
        email: data.email,
        phone: data.number,
        plan: `${data.plan} ${planPrice}`,
        choosenAddOns: addOns.length > 0 ? addOns.map((elem) => (data.isYear ? ` ${elem} $${price[elem] * 10}/yr` : ` ${elem} $${price[elem]}/mo`)) : 'None',
        isYear: data.isYear,
        price: countTotal(),
      };

      try {
        const response = await emailjs.send(process.env.SERVICE_I, process.env.TEMPLATE_ID, templateParams, process.env.PUBLIC_KEY);
        if (response.status === 200) {
          localStorage.removeItem('MultiData');
          setConfirm(true);
        }
      } catch (error) {
        setLoader((prevData) => ({
          ...prevData,
          isError: true,
          isLoading: false,
        }));
      }
    };

    sendData();
  }, [loader.isLoading]);

  return (
    <>
      {!isConfirm && (
      <>
        <ModalComponent dataError={isError} loaderError={loader.isError} />
        {loader.isLoading && <Loader />}
        <FinishingSection>
          <Container>
            <CardWrapper>
              <Title $margin="0 0 9px 0">Finishing up</Title>
              <Text
                as="p"
                $lineHeight="25px"
                $margin="0 0 22px 0"
                $fontSize="16px"
              >
                Double-check everything looks OK before confirming.
              </Text>
              <ChoosenElements>
                <TopSection>
                  <TopSectionTitle
                    $fontWeight="500"
                    $color="var(--primary-text-color)"
                    as="h2"
                    $margin="0 0 3px 0"
                  >
                    {`${data.plan ? plan : plan.substring(0, plan.indexOf('(') - 1)}`}
                  </TopSectionTitle>
                  <ChangePlanLink to="/plan">Change</ChangePlanLink>
                  <FinishingPrice>{planPrice}</FinishingPrice>
                </TopSection>
                {addOns.length > 0
            && (
            <AddOnsList>
              {addOns.map((elem) => (
                <AddOnsListItem key={elem}>
                  <AddOn>{elem}</AddOn>
                  <AddOnPrice>{data.isYear ? `+$${price[elem] * 10}/yr` : `+$${price[elem]}/mo`}</AddOnPrice>
                </AddOnsListItem>
              ))}
            </AddOnsList>
            )}
              </ChoosenElements>
              <TotalSection>
                <TotalPriceTitle>{data.isYear ? 'Total (per year)' : 'Total (per month)'}</TotalPriceTitle>
                <TotalPrice>{countTotal()}</TotalPrice>
              </TotalSection>
            </CardWrapper>
          </Container>
        </FinishingSection>
        <Footer onButtonClick={handleConfirmButtonClick} />
      </>
      )}
      {isConfirm && <Confirm />}
    </>
  );
}

export default Finishing;
