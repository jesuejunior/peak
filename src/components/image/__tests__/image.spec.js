import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Link } from 'react-router';
import Image from '../image.jsx';

it('should render Navbar Component', () => {
  const props = {};
  const image = TestUtils.renderIntoDocument(Image(props));
  const imageNode = ReactDOM.findDOMNode(image);

  expect(imageNode.textContent.indexOf('Home') !== -1).toBe(true);
});
