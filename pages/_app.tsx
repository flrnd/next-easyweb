import type { AppProps } from "next/app";
import { UserContextProvider } from "../lib/store/hooks/useUser";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}

export default MyApp;
