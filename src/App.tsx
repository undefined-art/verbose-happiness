import { ChakraProvider, type ThemeConfig } from "@chakra-ui/react";
import Timer from "./pages/timer";

import { extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Timer />
    </ChakraProvider>
  );
};

export default App;
