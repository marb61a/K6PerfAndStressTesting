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
    
}
