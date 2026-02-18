import useAuthModel from "@models/auth.model";

const useAuthController = () => {
  const { useLogin, useLogout } = useAuthModel();

  const loginMutation = useLogin();
  const logoutMutation = useLogout();

  return {
    loginService: (body: any) => loginMutation.mutate(body),
    logoutService: () => logoutMutation.mutate(),
  };
};

export default useAuthController;
