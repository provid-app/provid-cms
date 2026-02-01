import { Flex, Toast } from "@components/custom";
import AppRoute from "@routes/AppRoute";
import { useAuth } from "@stores/page.store";
import AuthRoute from "@routes/AuthRoute";
import { BrowserRouter } from "react-router";

import "react-tooltip/dist/react-tooltip.css";

const App = () => {
  const token = useAuth((state) => state.token);

  return (
    <Flex className="relative w-dvw h-dvh overflow-hidden">
      <BrowserRouter>{token ? <AppRoute /> : <AuthRoute />}</BrowserRouter>

      <Toast />
    </Flex>
  );
};

export default App;
