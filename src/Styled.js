import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  width: 500px;
  color: white;

  &::after {
    content: " 🦄";
  }
`;

export default StyledButton;
