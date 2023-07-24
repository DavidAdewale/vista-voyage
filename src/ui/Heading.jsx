import { css, styled } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      @media only screen and (max-width: 56.25em) {
        font-size: 3rem;
      }
    `}
`;

export default Heading;
