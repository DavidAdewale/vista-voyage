import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isLoading: loggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success('Sucessfully logged out');
      queryClient.invalidateQueries({ active: true });
      navigate('/login');
    },
  });

  return { logout, loggingOut };
}
