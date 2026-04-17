import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 1,
    iterations: 1,
};

const BASE_URL = 'http://localhost:8081';

export default function () {
    let res;

    res = http.get(`${BASE_URL}/`);
    check(res, {
        'GET / status 200': (r) => r.status === 200,
    });

    res = http.get(`${BASE_URL}/home`);
    check(res, {
        'GET /home status 200': (r) => r.status === 200,
    });

    res = http.get(`${BASE_URL}/register`);
    check(res, {
        'GET /register status 200': (r) => r.status === 200,
    });

    res = http.get(`${BASE_URL}/login`);
    check(res, {
        'GET /login status 200': (r) => r.status === 200 || r.status === 302,
    });

    sleep(1);
}