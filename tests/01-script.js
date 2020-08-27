// Calling Google
// What happens when 1000's of users call
import http from 'k6/http';

// The entry point function
export default function(){
    // Make a http request to google, ensure https is used
    http.get('http://www.google.com');
}

// To execute with 1 virtual user
// k6 run tests/01-script.js
// test successful

// To execute with 10 virtual users
// This is similar to multiple parallel while loops
// 10 users will hit the endpoint repeatedly for 5 seconds
// k6 run --vus 10 --duration 5s tests/01-script.js
// The above can be replaced by setting options at the beginning
// of the file

