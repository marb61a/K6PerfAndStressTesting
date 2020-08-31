import http from 'k6/http';
import { Counter } from 'k6/metrics';

// Use sleep to wait for a certain time in seconds
import { sleep } from 'k6';

var retryCounter = new Counter('GetAPI_MAX_RETRY');

export default function(){
    // Retry the API call
    const response = http.get("https://run.mocky.io/v3/877cb32d-99c5-4bca-8ca0-6a8a1e3fc0ec");

}
