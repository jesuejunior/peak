import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Link } from 'react-router';
import Navbar from '../navbar.jsx';

it('should render Navbar Component', () => {
  const navbar = TestUtils.renderIntoDocument(<Navbar />);
  const navbarNode = ReactDOM.findDOMNode(navbar);

  expect(navbarNode.textContent.indexOf('Peak') !== -1).toBe(true);
});
