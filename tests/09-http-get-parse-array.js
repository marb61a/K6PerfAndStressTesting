// Parsing an array
// Added as reponse body - https://run.mocky.io/v3/fca52c53-627f-4e49-92ca-e0ddd985633c
// Should return 200 and the array
// [
//     {
//         "name": "Joe Bloggs",
//         "email": "joe@example.com",
//         "job": "Web Developer",
//         "location": "London"
//     },
//     {
//         "name": "Jack Black",
//         "email": "jack@example.com",
//         "job": "Software Tester",
//         "location": "Dublin"
//     },
//     {
//         "name": "Dave Smith",
//         "email": "dave@example.com",
//         "job": "Manager",
//         "location": "New York"
//     },
//     {
//         "name": "John Jones",
//         "email": "john@example.com",
//         "job": "Engineer",
//         "location": "Manchester"
//     },
//     {
//         "name": "Gordon Bennett",
//         "email": "gordon@example.com",
//         "job": "Trader",
//         "location": "Glasgow"
//     }
// ]
import http from 'k6/http';
import { check } from 'k6';

export default function(){
    let response = http.get("https://run.mocky.io/v3/fca52c53-627f-4e49-92ca-e0ddd985633c");

    // Read the response array
    let body = JSON.parse(response.body);
    body.forEach(element => {
        console.log(`The name is ${element.name}`);
        console.log(`The email is ${element.email}`);
        console.log(`The job is ${element.job}`);
        console.log(`The location is ${element.location}`);
    });

}