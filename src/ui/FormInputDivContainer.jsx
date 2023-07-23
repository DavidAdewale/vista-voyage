import { styled } from 'styled-components';

const StyledFormDiv = styled.div`
  text-align: start;
  margin-bottom: 5rem;
  @media only screen and (max-width: 56.25em) {
    margin-bottom: 2rem;
  }
`;

function FormInputDivContainer({ children }) {
  return <StyledFormDiv>{children}</StyledFormDiv>;
}

export default FormInputDivContainer;
