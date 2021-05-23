import Footer from "./Footer";
import Navbar from "./Navbar";
import Tabs from "./Tabs";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Tabs />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
