import React from 'react';
import {
  HeaderListWrapper, HeaderSection, HeaderNavLink, HeaderListItem, StepText,
} from './StyledHeader';

function Header() {
  return (
    <HeaderSection>
      <HeaderListWrapper>
        <HeaderListItem>
          <HeaderNavLink to="/" exact="true">
            <StepText
              fontWeight="700"
              color="white"
              letterSpacing="true"
              transform="true"
            >
              your info
            </StepText>
          </HeaderNavLink>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderNavLink to="/step/2">
            <StepText
              fontWeight="700"
              color="white"
              letterSpacing="true"
              transform="true"
            >
              select plan
            </StepText>
          </HeaderNavLink>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderNavLink to="/step/3">
            <StepText
              fontWeight="700"
              color="white"
              letterSpacing="true"
              transform="true"
            >
              add-ons
            </StepText>
          </HeaderNavLink>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderNavLink to="/step/4">
            <StepText
              fontWeight="700"
              color="white"
              letterSpacing="true"
              transform="true"
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
