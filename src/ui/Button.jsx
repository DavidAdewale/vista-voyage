import { styled } from 'styled-components';

const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  color: var(--color-white);
  background-color: var(--color-blue-500);
  position: relative;
  padding: 1.6rem 6rem;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-green-100);
  cursor: pointer;
  transition: all 0.3s;
  z-index: 0;
  @media only screen and (max-width: 56.25em) {
    padding: 1rem 4rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled) {
    &:hover::after {
      width: 100%;
      height: 100%;
      left: 0%;
      border-radius: var(--border-radius-lg);
    }
    &:active {
      background-color: var(--color-green-main);
      color: var(--color-dark);
    }
    &:active::after {
      background-color: var(--color-green-main);
    }
    &::after {
      content: '';
      position: absolute;
      width: 0%;
      height: 0%;
      background-color: var(--color-blue-700);
      bottom: 0%;
      left: 45%;
      z-index: -1;
      border-radius: var(--border-radius-lg);
      transition: all 0.3s;
    }
  }
`;

function Button({ children, disabled }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

export default Button;
