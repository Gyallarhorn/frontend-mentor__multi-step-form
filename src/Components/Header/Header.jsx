import React from 'react';
import {
  HeaderListWrapper, HeaderSection, HeaderNavLink, HeaderListItem, StepText,
} from './StyledHeader';

function Header() {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
    }
  };
  return (
    <HeaderSection>
      <HeaderListWrapper>
        <HeaderListItem>
          <HeaderNavLink to="/" exact="true" onKeyDown={(e) => handleKeyDown(e)}>
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
          <HeaderNavLink to="/plan" onKeyDown={(e) => handleKeyDown(e)}>
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
          <HeaderNavLink to="/step/3" onKeyDown={(e) => handleKeyDown(e)}>
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
          <HeaderNavLink to="/step/4" onKeyDown={(e) => handleKeyDown(e)}>
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
