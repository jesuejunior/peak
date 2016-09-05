import React, { PropTypes } from 'react';

function Layout(props) {
  return (
    <div className="pure-g">
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
