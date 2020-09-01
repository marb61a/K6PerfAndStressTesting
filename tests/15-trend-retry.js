import http from 'k6/http';
import { Counter, Trend } from 'k6/metrics';

// Use sleep to wait for a certain time in seconds
import { sleep } from 'k6';

var retryCounter = new Counter('GetAPI_MAX_RETRY');
var retryTrend = new Trend("GetAPI_MAX_RETRY_TREND");

export default function(){
    // Retry the API call
    const response = http.get("https://run.mocky.io/v3/877cb32d-99c5-4bca-8ca0-6a8a1e3fc0ec");

    var maxAttempts = 5;
    retryCounter.add(1);
    // Set the amount of times to retry
    for(var retries = 5; retries > 0; retries--){
        var numberOfAttempts = maxAttempts - retries + 1;
        retryTrend.add(numberOfAttempts);

        if(response.status !== 404){
            retryCounter.add(1);
            // console.log(`Incorrect response, this is attempt number ${retries}`);

            // Checking the virtual user and the iteration
            console.log(`Incorrect response, this is attempt number ${numberOfAttempts} VU = ${__VU} ITER = ${__ITER}`);

            // Retry after every second
            sleep(1);

            /*
                GetAPI_MAX_RETRY_TREND.....: avg=3        min=1        med=3        max=5        p(90)=5        p(95)=5
                This will be returned using k6 run .\tests\15-trend-retry.js --vus 2 --duration 5s
                Avg, Min, Med and the percentiles can be ignored, max = 5 which means that for at least one user the GET API
                does not return a valid response within 5 seconds after trying for the maximum number of times
            */
        } else {
            // Correct response so no need to call the for loop
            retries == 0;
        }
    }

}
