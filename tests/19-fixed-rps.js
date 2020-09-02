// Fixed rate per second test
// Understanding how many requests per second are sent
// This can be affected by API response speed, hardware, internet etc
// There is normally no control over request rate
// Adding a rps flag when running test can set rate
// k6 run .\tests\19-fixed-rps.js --vus 5 --duration 5s --rps 5
// The above should lead to 25 requests as duration * rps
// It may not always 25 due to external factors like above

import http from 'k6/http';

export default function(){
    http.get("https://run.mocky.io/v3/ba6cf9ff-f3ae-45c4-a640-39192427ce68");

}
