import { styled } from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 5rem;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  outline-offset: 0.3rem;
  background-color: var(--color-green-100);
  color: var(--color-dark);
  padding: 0.8rem 1.2rem;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-green-300);
  margin-bottom: 2rem;

  transition: all 0.3s;

  &:active,
  &:focus {
    border: 1px solid var(--color-green-main);
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
  &input:not(:placeholder-shown) {
    background-color: var(--color-green-100);
  }

  @media only screen and (max-width: 56.25em) {
    height: 3.5rem;
  }
`;

export default Input;
