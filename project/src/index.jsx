import * as React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import PortfolioScreen from "./components/portfolio/PortfolioScreen";
import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <PortfolioScreen />
    </ChakraProvider>
  </React.StrictMode>
);

