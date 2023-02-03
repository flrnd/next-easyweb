import { setupStore } from "lib/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const store = setupStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
