import { Flex, Toast } from "@components/custom";
import AppRoute from "@routes/AppRoute";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@utils/config/reactQuery";
import { useAuth } from "@stores/page.store";
import AuthRoute from "@routes/AuthRoute";
import { BrowserRouter } from "react-router";

import "react-tooltip/dist/react-tooltip.css";
import { useEffect } from "react";

const App = () => {
  const auth = useAuth();

  useEffect(() => {
    auth.checkIsLoggedIn();
  }, []);

  return (
    <Flex className="relative w-dvw h-dvh overflow-hidden">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {auth.token ? <AppRoute /> : <AuthRoute />}
        </BrowserRouter>

        <Toast />
      </QueryClientProvider>
    </Flex>
  );
};

export default App;
