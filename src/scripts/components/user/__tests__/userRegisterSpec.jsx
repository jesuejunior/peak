import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Link } from 'react-router';
import UserRegister from '../userRegister';

it('should render UserRegister Component', () => {
  const userRegister = TestUtils.renderIntoDocument(<UserRegister />);
  const userRegisterNode = ReactDOM.findDOMNode(userRegister);

  expect(userRegisterNode.textContent).toEqual('register FORM');
});
