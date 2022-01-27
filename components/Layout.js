import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="antialiased">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
