import React from 'react';
import {
  HeaderListWrapper,
  HeaderSection,
  HeaderNavLink,
  HeaderListItem,
  StepText,
} from './StyledHeader';

function Header() {
  return (
    <HeaderSection>
      <HeaderListWrapper>
        <HeaderListItem>
          <HeaderNavLink tabIndex={-1} to="/" aria-label="your info">
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
          <HeaderNavLink tabIndex={-1} to="/plan" aria-label="select plan">
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
          <HeaderNavLink tabIndex={-1} to="/addOns" aria-label="add-ons">
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
          <HeaderNavLink tabIndex={-1} to="/finishing" aria-label="summary">
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
