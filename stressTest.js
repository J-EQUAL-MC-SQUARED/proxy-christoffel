import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '1m',
};

export default function () {
  http.get(`http://localhost:8080/api/picture-service/${Math.floor(Math.random() * (10000 - 1) + 1)}`);
  sleep(0.05);
}
