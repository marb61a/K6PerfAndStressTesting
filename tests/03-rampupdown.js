import http from 'k6/http';

// Ramp up and down users
export let options = {
    // This is how ramping up and down of users is done
    stages: [
        {duration: '10s', target: 5},
        {duration: '20s', target: 25},
        {duration: '10s', target: 5}
    ]
}

export default function(){
    // Make a http request to google, ensure https is used
    http.get('http://www.google.com');
}
