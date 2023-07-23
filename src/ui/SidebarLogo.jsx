import { styled } from 'styled-components';
import { useDarkMode } from '../context/DarkModeToggleContext';

const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Logo = styled.img`
  width: 60%;

  @media only screen and (max-width: 75em) {
    width: 40%;
  }
`;

function SidebarLogo() {
  const { isDark } = useDarkMode();
  const src = isDark ? 'logo-dark.png' : 'logo.png';
  return (
    <LogoContainer>
      <Logo src={src} draggable="false" />
    </LogoContainer>
  );
}

export default SidebarLogo;
