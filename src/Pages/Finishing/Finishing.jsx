/* eslint-disable max-len */
import React, { useContext } from 'react';
import {
  AddOn,
  AddOnPrice,
  AddOnsList,
  AddOnsListItem,
  ChangePlanLink,
  ChoosenElements,
  FinishingPrice,
  FinishingSection,
  Modal,
  ModalBody,
  ModalIcon,
  ModalLink,
  ModalText,
  TopSection,
  TopSectionTitle,
  TotalPrice,
  TotalPriceTitle,
  TotalSection,
} from './StyledFinishing';
import {
  Button,
  CardWrapper, Container, Text, Title,
} from '../../globalStyles';
import Footer from '../../Components/Footer/Footer';
import { DataContext } from '../../DataContext';
import price from '../../price';

function Finishing() {
  const { data, countTotal } = useContext(DataContext);

  const { addOns } = data;
  const plan = `${data.plan ? data.plan.substring(0, 1).toUpperCase() + data.plan.substring(1) : 'None'} (${data.isYear ? 'Yearly' : 'Monthly'})`;
  let planPrice = data.isYear ? price[data.plan] * 10 : price[data.plan];

  if (planPrice) {
    planPrice = `$${planPrice}${data.isYear ? '/yr' : '/mo'}`;
  } else {
    planPrice = '$0';
  }

  return (
    <>
      <Modal role="dialog" aria-modal="true">
        <Container>
          <ModalBody>
            <ModalIcon>🫠</ModalIcon>
            <ModalText as="p">
              Stay worry, don&#39;t calm! Just kidding, pal. You probably forgot to provide your details or choose a plan. Let&#39;s go back to the main page and try again.
            </ModalText>
            <ModalLink to="/">Go back</ModalLink>
          </ModalBody>
        </Container>
      </Modal>
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
      <Footer />
    </>
  );
}

export default Finishing;
