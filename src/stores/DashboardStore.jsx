import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

class DashboardStore extends EventEmitter {
    constructor() {
        super();
        this._nodes = [];
    }

    getAll() {
        return this._nodes;
    }

    handleActions() {

    }
}

const dashboardStore = new DashboardStore;
AppDispatcher.register(dashboardStore.handleActions.bind(this));

export default dashboardStore;
