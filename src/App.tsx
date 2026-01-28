import { Flex } from "@components/custom";
import AppRoute from "@routes/AppRoute";
// import AuthRoute from "@routes/AuthRoute";
import { BrowserRouter } from "react-router";

import "react-tooltip/dist/react-tooltip.css";

const App = () => {
  return (
    <Flex className="w-dvw h-dvh overflow-hidden">
      <BrowserRouter>
        {/* <AuthRoute /> */}
        <AppRoute />
      </BrowserRouter>
    </Flex>
  );
};

export default App;
