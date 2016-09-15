jest.dontMock('../../constants/UserConstants.jsx');
jest.dontMock('../UserStore.jsx');
jest.dontMock('object-assign');

describe('UserStore', function() {

    const UserConstants = require('../../constants/UserConstants.jsx');
    var AppDispatcher;
    var UserStore;
    var callback;

    const authUserAction = {
        source: 'VIEW_ACTION',
        action: {
            type: UserConstants.AUTHENTICATE_USER,
            user: {
                user: 'user01',
                password: 'password01'
            }
        }
    };

    beforeEach(function() {
        // console.log(AppDispatcher.register.mock);
        AppDispatcher = require('../../dispatcher/AppDispatcher.jsx');
        UserStore = require('../UserStore.jsx');
        callback = AppDispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', function () {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });

});
