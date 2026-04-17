import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '20s', target: 5 },
        { duration: '30s', target: 10 },
        { duration: '20s', target: 0 },
    ],
};

const BASE_URL = 'http://localhost:8081';

export default function () {
    const uniqueUser = `user_${__VU}_${__ITER}_${Date.now()}`;
    const payload = {
        username: uniqueUser,
        password: 'test12345',
        role: 'USER',
    };

    const params = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    const res = http.post(`${BASE_URL}/register`, payload, params);

    check(res, {
        'POST /register status 200 or 302': (r) => r.status === 200 || r.status === 302,
    });

    sleep(1);
}