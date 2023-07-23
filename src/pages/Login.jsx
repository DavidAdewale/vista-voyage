import { styled } from 'styled-components';
import Heading from '../ui/Heading';
import FormContainer from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useDarkMode } from '../context/DarkModeToggleContext';
import { useState } from 'react';
import FormInputDivContainer from '../ui/FormInputDivContainer';
import FormRowVertical from '../ui/FormRowVertical';
import { useLogin } from '../features/authentication/useLogin';
import SmallLoadingSpinner from '../ui/SmallLoadingSpinner';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  @media only screen and (max-width: 56.25em) {
    padding: 30rem 0;
  }
  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }
`;

const LoginPageLogo = styled.img`
  width: 10%;
  @media only screen and (max-width: 75em) {
    width: 15%;
  }
  @media only screen and (max-width: 56.25em) {
    width: 20%;
  }
  @media only screen and (max-width: 37.5em) {
    width: 30%;
  }
`;

const LoginBox = styled.div`
  width: 40%;
  margin: 2rem auto;
  padding: 5rem 4rem;
  border: 1px solid var(--color-green-300);
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow);
  text-align: start;
  @media only screen and (max-width: 75em) {
    width: 60%;
    padding: 2rem 2rem;
  }
  @media only screen and (max-width: 37.5em) {
    width: 90%;
    padding: 2rem 0rem;
  }
`;

function Login() {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('newpassword');
  const { login, isLoading } = useLogin();

  const { isDark } = useDarkMode();
  const src = isDark ? 'logo-dark.png' : 'logo.png';

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }
  return (
    <Main>
      <LoginPageLogo src={src} draggable="false" />
      <Heading as="h1">Login to your account</Heading>
      <LoginBox>
        <FormContainer onSubmit={handleSubmit}>
          <FormInputDivContainer>
            <FormRowVertical label="Email address">
              <Input
                type="email"
                id="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </FormRowVertical>
            <FormRowVertical label="Password">
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </FormRowVertical>
          </FormInputDivContainer>
          <Button disabled={isLoading}>
            {isLoading ? <SmallLoadingSpinner /> : 'Log in'}
          </Button>
        </FormContainer>
      </LoginBox>
    </Main>
  );
}

export default Login;
