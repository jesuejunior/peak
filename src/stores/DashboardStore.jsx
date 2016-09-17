import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

_nodes = [];

class DashboardStore extends BaseStore {
    constructor() {
      super();
    }

    getAllNodes() {
      return _nodes;
    }

    handleActions() {}
}

const dashboardStore = new DashboardStore;
AppDispatcher.register(dashboardStore.handleActions.bind(this));

export default dashboardStore;
