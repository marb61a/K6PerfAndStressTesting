import http from 'k6/http';
import { Counter } from 'k6/metrics';

// Use sleep to wait for a certain time in seconds
import { sleep } from 'k6';

var retryCounter = new Counter('GetAPI_MAX_RETRY');

export default function(){
    // Retry the API call
    const response = http.get("https://run.mocky.io/v3/877cb32d-99c5-4bca-8ca0-6a8a1e3fc0ec");

    retryCounter.add(1);
    // Set the amount of times to retry
    for(var retries = 5; retries > 0; retries--){
        // Assume that the response is 404 and if not then retry
        if(response.status !== 404){
            retryCounter.add(1);
            // console.log(`Incorrect response, this is attempt number ${retries}`);

            // Checking the virtual user and the iteration
            console.log(`Incorrect response, this is attempt number ${retries} VU = ${__VU} ITER = ${__ITER}`);

            // Retry after every second
            sleep(1);
        } else {
            // Correct response so no need to call the for loop
            retries == 0;

            // This will not work when there are multiple users and will fail
            // This is because counter is a Global variable and not per virtual user (VU)
            // Instead TREND will be used
        }
    }

}
