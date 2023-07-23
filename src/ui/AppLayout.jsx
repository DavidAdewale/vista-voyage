import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import { HamburgerToggler } from '../context/HamburgerMenuContext';

const StyledLayout = styled.div`
  display: flex;
  height: 100dvh;

  @media only screen and (max-width: 75em) {
    position: relative;
  }
`;

const Main = styled.main`
  flex-grow: 1;
`;

const AppContent = styled.div`
  padding: 2rem 4rem;
`;

function AppLayout() {
  return (
    <HamburgerToggler>
      <StyledLayout>
        <Sidebar />
        <Main>
          <Header />
          <AppContent>
            <Outlet />
          </AppContent>
        </Main>
      </StyledLayout>
    </HamburgerToggler>
  );
}

export default AppLayout;
