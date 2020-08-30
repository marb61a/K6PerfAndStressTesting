// Create a mock API to parse JSON
// Again using Mocky - https://run.mocky.io/v3/3f702eb9-f312-4d20-982e-7b2a90073887
// Should return response of "Data fetched successfully"

import http from 'k6/http';
import { check } from 'k6';

export default function(){
    var url = "https://run.mocky.io/v3/3f702eb9-f312-4d20-982e-7b2a90073887";

    var headerParam = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const response = http.get(url, headerParam);

    check(response, {
        "Is status 200": (r) => r.status === 200
    });
    
    // Parse the body JSON to see if it matches the message entered
    let body = JSON.parse(response.body);

    console.log(`Response body is ${body}`);
    console.log(`Response body is ${JSON.stringify(body)}`);
    console.log(`The message is ${body.Message}`);

    // Use check to verify the message
    check(response, {
        "Is Message is Success": (r) => JSON.parse(r.body).Message === "Data fetched successfully"
    });
    
}
