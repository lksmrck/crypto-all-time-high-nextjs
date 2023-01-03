import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { CryptoContextProvider } from "../state/CryptoContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CryptoContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </CryptoContextProvider>
  );
}
