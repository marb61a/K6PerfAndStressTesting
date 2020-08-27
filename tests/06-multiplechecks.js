// Second API created https://run.mocky.io/v3/cec79dd8-cc39-40de-934e-e3630fc5e841
// As there is a body response there will be a body length value

import http from 'k6/http';
import { check } from 'k6';

export default function(){
    // let response = http.get('https://run.mocky.io/v3/809ce688-d3ba-41df-9dec-66d1406428ec');

    let response = http.get('https://run.mocky.io/v3/cec79dd8-cc39-40de-934e-e3630fc5e841');

    // Check response body length - should be 0 if body not specified
    // $__VU respresents the unique virtual user number
    // Add vus and number as an option on the cli when running tests for example
    // k6 run tests/06-multiplechecks.js --vus 5
    // ITERA is for printing iteration number
    console.log(`Resonse body length ${response.body.length} for VU = ${__VU} ITERATION ${__ITER}`);

    check(response, {
        "Response status is 200 " : (r) => r.status === 200,
        "Body size is 43 bytes " : (r) => r.body.length == 43
    });
    
}
