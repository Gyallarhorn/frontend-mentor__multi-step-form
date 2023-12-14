import React from 'react';
import {
  HeaderListWrapper, HeaderSection, HeaderNavLink, HeaderListItem, StepText,
} from './StyledHeader';

function Header() {
  return (
    <HeaderSection>
      <HeaderListWrapper>
        <HeaderListItem>
          <HeaderNavLink tabIndex={-1} to="/" exact="true">
            <StepText
              $fontWeight="700"
              $color="white"
              $letterSpacing="true"
              $transform="true"
            >
              your info
            </StepText>
          </HeaderNavLink>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderNavLink tabIndex={-1} to="/plan">
            <StepText
              $fontWeight="700"
              $color="white"
              $letterSpacing="true"
              $transform="true"
            >
              select plan
            </StepText>
          </HeaderNavLink>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderNavLink tabIndex={-1} to="/addOns">
            <StepText
              $fontWeight="700"
              $color="white"
              $letterSpacing="true"
              $transform="true"
            >
              add-ons
            </StepText>
          </HeaderNavLink>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderNavLink tabIndex={-1} to="/step/4">
            <StepText
              $fontWeight="700"
              $color="white"
              $letterSpacing="true"
              $transform="true"
            >
              summary
            </StepText>
          </HeaderNavLink>
        </HeaderListItem>
      </HeaderListWrapper>
    </HeaderSection>
  );
}

export default Header;
