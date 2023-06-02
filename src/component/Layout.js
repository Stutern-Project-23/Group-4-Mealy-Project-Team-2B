import React from "react";
import PropTypes from "prop-types";
import AuthNavbar from "./authNavbar/AuthNavbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <AuthNavbar />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
