import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AuthService from '../services/AuthService.jsx';
import AuthConstants from '../constants/AuthConstants.jsx';

export default class BaseStore extends EventEmitter {
	constructor() {
		super();
	}

	emitChange() {
    this.emit('change');
  }

  addChangeListener(cb) {
    this.on('change', cb);
  }

  removeChangeListener(cb) {
    this.removeListener('change', cb);
  }
}
