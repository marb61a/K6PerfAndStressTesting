// Because checks will not cause an entire test suite to fail
// There is a need to use Rate alongside checks

import http from 'k6/http';
import { check } from 'k6';

// Rate allows settings fail rate conditions eg Test suite fails
// if 10% fail then the suite fails, if less than 10% fail then the
// test suite will pass
import { Rate } from 'k6/metrics';

// String errors is not important it can be anything but will be seen in logs
export let errorRate = new Rate('errors');

// Define options
export let options = {
    thresholds : {
        // 10% error
        errors: ["rate<0.1"]
    }
}

export default function(){
    let response = http.get('https://run.mocky.io/v3/cec79dd8-cc39-40de-934e-e3630fc5e841');

    console.log(`Resonse body length ${response.body.length} for VU = ${__VU} ITERATION ${__ITER}`);

    const check1 = check(response, {
        "Response status is 200 " : (r) => r.status === 200
    });

    // A boolean which needs to be set to negative
    errorRate.add(!check1);

    const check2 = check(response, {
        "Body size is 43 bytes " : (r) => r.body.length == 43
    });

    // A boolean which needs to be set to negative
    errorRate.add(!check2);    
}