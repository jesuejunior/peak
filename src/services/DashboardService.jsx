import axios from 'axios';

class DashboardService {
    getNodes() {
        return [
            {
                'id': 100,
                'name': 'node1',
                'so': 'ubuntu',
                'provider': 'vmware',
                'ip': '192.168.1.250',
                'username': 'admin',
                'password': 'abc123'
            },
            {
                'id': 101,
                'name': 'node2',
                'so': 'ubuntu',
                'provider': 'vbox',
                'ip': '192.168.1.251',
                'username': 'admin',
                'password': 'abc123'
            }
        ];
    }
}

export default new DashboardService;
