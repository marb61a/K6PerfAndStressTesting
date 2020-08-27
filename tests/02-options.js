import http from 'k6/http';

// Specifying options instead of adding them as arguments when running tests
export let options = {
    vus: 10,
    duration : '10s'
};

// The entry point function
export default function(){
    // Make a http request to google, ensure https is used
    http.get('http://www.google.com');
}
