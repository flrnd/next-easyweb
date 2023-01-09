import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../lib/store";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
