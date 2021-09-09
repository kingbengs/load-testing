import http from 'k6/http';
import { Trend } from 'k6/metrics';

let myTrend = new Trend('waiting_time');

export default function () {
  let r = http.get('https://httpbin.org');
  myTrend.add(r.timings.waiting);
  console.log(myTrend.name);  // waiting_time
}
