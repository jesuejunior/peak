import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Link } from 'react-router';
import Expedition from '../expedition.jsx';

it('should render Navbar Component', () => {
  const props = {};
  const expedition = TestUtils.renderIntoDocument(Expedition(props));
  const expeditionNode = ReactDOM.findDOMNode(expedition);

  expect(expeditionNode.textContent.indexOf('Home') !== -1).toBe(true);
});
