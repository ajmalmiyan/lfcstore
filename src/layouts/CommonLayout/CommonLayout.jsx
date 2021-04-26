import React from "react";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
