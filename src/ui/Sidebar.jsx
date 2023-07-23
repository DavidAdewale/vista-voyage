import { css, styled } from 'styled-components';
import SidebarLogo from './SidebarLogo';
import MainNav from './MainNav';
import { useMenuToggler } from '../context/HamburgerMenuContext';
import Uploader from '../data/Uploader';

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100dvh;
  padding: 4rem 4rem;
  flex-basis: 30rem;
  flex-grow: 0;
  gap: 5rem;
  background-color: var(--color-green-100);
  border-right: 1px solid var(--color-green-300);
  overflow: scroll;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 75em) {
    position: absolute;
    height: 100dvh;
    max-width: 30rem;
    padding: 3rem 1.7rem;
    transform: translateX(0);
    box-shadow: var(--box-shadow-menu-sm);

    ${(props) =>
      props.type === 'hidden' &&
      css`
        transform: translateX(-30rem);
        box-shadow: none;
      `}
  }

  @media only screen and (max-width: 37.5em) {
    max-width: 25rem;
    height: 100dvh;
    padding: 4rem 1rem;
    box-shadow: var(--box-shadow-menu-lg);
    ${(props) =>
      props.type === 'hidden' &&
      css`
        transform: translateX(-30rem);
        box-shadow: none;
      `}
  }
`;

function Sidebar() {
  const { isOpen } = useMenuToggler();

  return (
    <StyledSidebar type={isOpen ? '' : 'hidden'}>
      <SidebarLogo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
