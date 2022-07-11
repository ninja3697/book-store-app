import Layout from "../components/layout";
import { BasketContextProvider } from "../contexts/basket.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <BasketContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BasketContextProvider>
  );
}

export default MyApp;
