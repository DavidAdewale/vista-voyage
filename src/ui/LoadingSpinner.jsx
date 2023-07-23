import { styled } from 'styled-components';

const Loader = styled.span`
  box-sizing: border-box;
  position: relative;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;

  &:after,
  &:before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    border-radius: 50%;
    background: var(--color-blue-500);
    animation: spin 1s linear infinite;
    transform-origin: 0px 100%;
  }
  &:before {
    transform-origin: 0 50%;
    background: var(--color-dark);
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

function LoadingSpinner() {
  return <Loader />;
}

export default LoadingSpinner;
