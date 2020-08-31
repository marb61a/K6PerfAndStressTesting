// POST JSON body to REST Api
// API at - https://run.mocky.io/v3/877cb32d-99c5-4bca-8ca0-6a8a1e3fc0ec
// Check to see that POST email and password to this API (JSON format)

import http from 'k6/http';

export default function(){
    var url = "https://run.mocky.io/v3/877cb32d-99c5-4bca-8ca0-6a8a1e3fc0ec";

    var param = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Defining body, it will accept email and password
    var payload = JSON.stringify({
        email: "abc@example.com",
        password: "abc123"
    })

    http.post(url, param, payload);
}
