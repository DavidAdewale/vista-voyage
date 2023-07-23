import { useEffect } from 'react';
import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import { styled } from 'styled-components';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-green-100);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <LoadingSpinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
