import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Link } from 'react-router';
import UserLogin from '../userLogin.jsx';

it('should render UserLogin Component', () => {
  const props = {};
  const userLogin = TestUtils.renderIntoDocument(UserLogin(props));
  const userLoginNode = ReactDOM.findDOMNode(userLogin);

  expect(userLoginNode.textContent.indexOf('Please sign in') !== -1).toBe(true);
});
