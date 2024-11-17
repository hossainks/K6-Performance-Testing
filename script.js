import http from "k6/http";
const url = "https://httpbin.test.k6.io/post";

export default function () {
  let response = http.post(url, "Hello world!");
  console.log(response.json().data);
}