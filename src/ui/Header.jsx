import {
  HiMiniArrowRightOnRectangle,
  HiMiniBars3,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUser,
  HiXMark,
} from 'react-icons/hi2';
import { css, styled } from 'styled-components';
import { useMenuToggler } from '../context/HamburgerMenuContext';
import { useDarkMode } from '../context/DarkModeToggleContext';
import { useLogout } from '../features/authentication/useLogout';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 2.5rem;
  background-color: var(--color-white);
  padding: 1rem 4rem;
  border-bottom: 1px solid var(--color-grey-500);
  box-shadow: var(--box-shadow);

  @media only screen and (max-width: 75em) {
    padding: 1rem 1rem;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 1.2rem 1.2rem;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
  color: var(--color-dark);

  &:hover {
    background-color: var(--color-green-100);
    color: var(--color-dark);
  }

  ${(props) =>
    props.type === 'hamburger' &&
    css`
      display: none;

      @media only screen and (max-width: 75em) {
        display: inline-block;
      }
    `}
`;

function Header() {
  const { isOpen, toggleMenu } = useMenuToggler();
  const { isDark, toggleDarkMode } = useDarkMode();

  const { logout } = useLogout();
  function handleLogout() {
    logout();
  }
  return (
    <StyledHeader>
      {/* <h1>Header</h1> */}
      <StyledButton onClick={toggleDarkMode}>
        {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
      </StyledButton>
      <StyledButton>
        <HiOutlineUser />
      </StyledButton>
      <StyledButton onClick={handleLogout}>
        <HiMiniArrowRightOnRectangle />
      </StyledButton>
      <StyledButton type="hamburger" onClick={toggleMenu}>
        {isOpen ? <HiXMark /> : <HiMiniBars3 />}
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
