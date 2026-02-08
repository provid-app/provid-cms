import { AuthVector, Logo } from "@assets/index";
import { CustomButton, Flex } from "@components/custom";
import { FormList } from "@components/layout";
import { loginForm } from "@utils/constant/form.data";
import {
  loginValidator,
  type LoginInput,
} from "@utils/validator/auth.validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth, useToast } from "@stores/page.store";

const Login = () => {
  const addToken = useAuth((state) => state.addToken);
  const showToast = useToast((state) => state.onShow);

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginValidator),
    defaultValues: loginForm.defaultValues as LoginInput,
  });

  return (
    <Flex className="flex-row flex-1 p-6">
      <Flex className="flex-1 max-w-158.75 h-[calc(100dvh-48px)]">
        <AuthVector className="size-full" />
      </Flex>

      <Flex className="flex-1 items-center justify-center gap-6">
        <Logo width={32} height={32} />

        <form
          className="flex flex-col w-full max-w-87.5 gap-6"
          onSubmit={handleSubmit((data) => {
            if (
              data.email === "halo@provid.id" &&
              data.password === "GangAbbah#34A"
            ) {
              showToast("success", "Login berhasil!");
              addToken("token");
            } else {
              showToast("failed", "Email atau Password salah!");
            }
          })}
        >
          <Flex className="items-center py-2 gap-1">
            <p className="text-subtitle font-semibold text-foreground">
              Selamat Datang
            </p>

            <p className="text-body2 text-muted-foreground">
              Masukkan email untuk akses Provid Dashboard
            </p>
          </Flex>

          <FormList control={control} listData={loginForm.inputs} />

          <CustomButton type="submit" label="Masuk" />
        </form>
      </Flex>
    </Flex>
  );
};

export default Login;
