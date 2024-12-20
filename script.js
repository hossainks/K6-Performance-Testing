import http from "k6/http";
import { check, sleep } from "k6";
// const url = "https://httpbin.test.k6.io/post";
const hostname = `https://${__ENV.DOMAIN}`;
const url = `${hostname}/post`;

export let options = {
  vus: 10,
  duration: "10s",
  iterations: 100,
};

export default function () {
  let response = http.post(url, "Hello world!");
  check(response, {
    "is status 200": (r) => r.status === 200,
    "Response Included": (r) => r.body.includes("Hello world!"),
    "response time < 500ms": (r) => r.timings.duration < 500,
  });

  console.log(response.json().data);
  sleep(Math.random() * 2);
}
