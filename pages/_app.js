import Layout from "../components/Layout";
import "../styles/globals.css";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SimpleReactLightbox>
  );
}

export default MyApp;
