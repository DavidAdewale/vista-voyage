import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import {
  HiOutlineCalendarDays,
  HiOutlineChartPie,
  HiOutlineCog8Tooth,
  HiOutlineMap,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { useMenuToggler } from '../context/HamburgerMenuContext';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 2.5rem;
  color: inherit;
  text-decoration: none;
  padding: 1rem 0 1rem 1rem;
  position: relative;
  border-radius: var(--border-radius-sm);
  z-index: 0;

  &:hover {
    color: var(--color-white);
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-blue-500);
      z-index: -1;
      transition: width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        color 0.6s ease 0.2s;
    }
  }

  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-blue-500);
    color: var(--color-white);

    &:hover {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-dark);
        z-index: -1;
        transition: width 0.2s;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 0%;
    border-radius: var(--border-radius-sm);
    background-color: var(--color-blue-500);
    z-index: -1;
    top: 0;
    left: 0;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: currentColor;
    transition: all 0.3s;
  }
`;

function MainNav() {
  const { toggleMenu } = useMenuToggler();

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard" onClick={toggleMenu}>
            <HiOutlineChartPie />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings" onClick={toggleMenu}>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/tours" onClick={toggleMenu}>
            <HiOutlineMap />
            <span>Tours</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users" onClick={toggleMenu}>
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings" onClick={toggleMenu}>
            <HiOutlineCog8Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
