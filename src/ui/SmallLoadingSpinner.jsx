import { styled } from 'styled-components';

const Loader = styled.span`
  display: inline-block;
  width: 5rem;
  height: 1.6rem;
  background: radial-gradient(
      circle 5px at 5px center,
      var(--color-green-100) 100%,
      transparent 0
    ),
    radial-gradient(
      circle 5px at 5px center,
      var(--color-green-100) 100%,
      transparent 0
    );
  background-size: 16px 16px;
  background-repeat: no-repeat;
  position: relative;
  animation: ballX 1s linear infinite;

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-green-100);
    inset: 0;
    margin: auto;
    animation: moveX 1s cubic-bezier(0.5, 300, 0.5, -300) infinite;
  }
  @keyframes ballX {
    0%,
    25%,
    50%,
    75%,
    100% {
      background-position: 25% 0, 75% 0;
    }
    40% {
      background-position: 25% 0, 85% 0;
    }
    90% {
      background-position: 15% 0, 75% 0;
    }
  }
  @keyframes moveX {
    100% {
      transform: translate(0.15px);
    }
  }
`;

function SmallLoadingSpinner() {
  return <Loader></Loader>;
}

export default SmallLoadingSpinner;
