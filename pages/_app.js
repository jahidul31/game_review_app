import "../styles/globals.css";
import Router from "next/router";
import Head from "next/head";

import nProgress from "nprogress";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  //const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
    //setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    //setLoading(false);
    nProgress.done();
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
