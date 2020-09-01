// Checks are similar to assertions but do not stop 
// test suite execution. There is no load test failure
// so combining thresholds and checks can be used
import http from 'k6/http';
import { check } from 'k6';

export let options = {
    // Will need to test different numbers of virtual users as
    // some quantities fail and others pass
    vus: 10,
    duration: '10s', 
    thresholds: {
        // Successful check rat must be above 95%
        'checks': ['rate>0.95']
    }
};

export default function(){
    const response = http.get("https://run.mocky.io/v3/ba6cf9ff-f3ae-45c4-a640-39192427ce68");

    check(response, {
        "is status is 200 ": r => r.status === 200 
    });

}
