import Footer from "./Footer";
import Navbar from "./Navbar";
import PageHead from "./PageHead";

const Layout = ({ children }) => {
  return (
    <>
      <PageHead />
      <Navbar />
      <main className="antialiased">{children}</main>
    </>
  );
};

export default Layout;
