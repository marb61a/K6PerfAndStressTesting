// Having tresholds for passing or failing tests
// EG System should not produce more than 1% errors

import http from 'k6/http';
import { Rate } from 'k6/metrics';

const failureRate = new Rate("Failed Requests");

export let options = {
    tresholds: {
        // Defining criteria
        "Failed Requests": ['rate<0.1'],
        // Response times for 95% of requests should be below 200ms
        // Response times for 99% of requests should be below 400ms
        "http_req_duration": ['p(95)<200', 'p(99)<400']
    }
}

export default function(){
    let res = http.get("https://run.mocky.io/v3/877cb32d-99c5-4bca-8ca0-6a8a1e3fc0ec");

    // Apply thresholds
    // If response is not 200 then there will be failure
    failureRate.add(res.status !== 200);
}
