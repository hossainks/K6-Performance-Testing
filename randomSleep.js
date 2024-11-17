import http from "k6/http";
import { sleep } from "k6";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";
const url = "https://httpbin.test.k6.io/post";
export default function () {
  let response = http.post(url, "Hello world!");
  console.log(response.json().data);
  sleep(randomIntBetween(1, 5));
}
