import http from 'k6/http';
import { check } from 'k6';
import { Rate, Trend } from 'k6/metrics';

export let errorRate = new Rate('errors');

// Define Trend
var getApiTrend = new Trend("TREND_Get_Api_Dutatiom");

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

    // Added response duration inside custom trend
    // Inside a single API tests TREND_Get_Api_Duration and http_req_duration are the same, this
    // will not be the case when testing multiple API's in the single test file, this is where
    // TREND will be used to see the individual API as http_req_duration will show cumulative responses
    getApiTrend.add(response.timings.duration);
}
