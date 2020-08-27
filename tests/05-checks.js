// Create a mock API at https://designer.mocky.io/
// https://run.mocky.io/v3/809ce688-d3ba-41df-9dec-66d1406428ec
// This will be what the NFR tests are ran against

import http from 'k6/http';
import { check } from 'k6';

export default function(){
    let response = http.get('https://run.mocky.io/v3/809ce688-d3ba-41df-9dec-66d1406428ec');
    // Checks are similar to asserts but asserts stop test execution upon failure
    // checks will not they will just store wheter a test passes or fails
    check(response, {
        // Checking that the 200 response is returned
        // Triple equals is used for both value and data type
        "Response status is 200 : " : (r) => r.status === 200
    });
    
}
