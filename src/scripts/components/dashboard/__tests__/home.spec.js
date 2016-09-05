import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Home from '../home.jsx';

it('should render Home Component', () => {
  const home = TestUtils.renderIntoDocument(<Home />);
  const homeNode = ReactDOM.findDOMNode(home);

  expect(homeNode.textContent.indexOf('Peak Dashboard') !== -1).toBe(true);
});
