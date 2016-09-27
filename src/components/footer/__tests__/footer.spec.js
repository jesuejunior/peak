import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Link } from 'react-router';
import Footer from '../footer.jsx';

it('should render Navbar Component', () => {
  const props = {};
  const footer = TestUtils.renderIntoDocument(Footer(props));
  const footerNode = ReactDOM.findDOMNode(footer);

  expect(footerNode.textContent.indexOf('Home') !== -1).toBe(true);
});
