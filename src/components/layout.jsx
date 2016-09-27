import React from 'react';
import Navbar from './navbar/navbar.jsx';
import Footer from './footer/footer.jsx';

export default function Layout (props) {
  return(
    <div className="pure-u-1">
      <Navbar />
      <div className="content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
