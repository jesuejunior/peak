import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Dashboard from '../dashboard.jsx';

it('should render Dashboard Component', () => {
  const props = {};
  const dashboard = TestUtils.renderIntoDocument(Dashboard(props));
  const dashboardNode = ReactDOM.findDOMNode(dashboard);

  expect(dashboardNode.textContent.indexOf('Peak Dashboard') !== -1).toBe(true);
});
