import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>the5starz</title>
        <meta
          name="description"
          content="the5starz The place to get free stuff for your reviews!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=optional&amp;ver=5.8.1"
          type="text/css"
        />
      </Head>
      <Navbar />
      <main className="antialiased">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
