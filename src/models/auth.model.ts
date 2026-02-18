import useHelper from "@hooks/useHelper";
import { login, logout } from "@services/auth.service";
import { useMutation } from "@tanstack/react-query";
import type { LoginInput } from "@utils/validator/auth.validator";

export interface LoginDTO {
  access_token: string;
  refresh_token: string;
}

const useAuthModel = () => {
  const {
    auth,
    hideConfirmationModal,
    onMutate,
    onSettled,
    onSuccess,
    onError,
  } = useHelper();

  const useLogin = () =>
    useMutation({
      mutationKey: ["login"],
      mutationFn: (body: LoginInput) => login(body),
      onMutate,
      onSettled,
      onSuccess: (response) => {
        localStorage.setItem("@refresh", response.data!.refresh_token);
        localStorage.setItem("@access", response.data!.access_token);
        auth.addToken(response.data!.access_token);
        onSuccess(response.message);
      },
      onError: (error) => onError(error.message),
    });

  const useLogout = () =>
    useMutation({
      mutationKey: ["logout"],
      mutationFn: () => logout(),
      onMutate,
      onSettled,
      onSuccess: (response) => {
        localStorage.removeItem("@access");
        localStorage.removeItem("@refresh");
        auth.resetToken();
        hideConfirmationModal();
        onSuccess(response.message);
      },
      onError: (error) => onError(error.message),
    });

  return {
    useLogin,
    useLogout,
  };
};

export default useAuthModel;
