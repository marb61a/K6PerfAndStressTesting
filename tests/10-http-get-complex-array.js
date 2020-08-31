// Parsing the array below which is the response 
// https://run.mocky.io/v3/c1c41b41-8e98-4297-89be-9d62f19dc178

// [
//     {
//         "name": "Joe Bloggs",
//         "email": "joe@example.com",
//         "job": "Web Developer",
//         "location": "London",
//         "array": [
//             1, 2, 3, 4, 5
//         ]
//     },
//     {
//         "name": "Jack Black",
//         "email": "jack@example.com",
//         "job": "Software Tester",
//         "location": "Dublin",
//         "array": [
//             2, 3, 4, 5, 1
//         ]
//     },
//     {
//         "name": "Dave Smith",
//         "email": "dave@example.com",
//         "job": "Manager",
//         "location": "New York",
//         "array": [
//             3, 4, 5, 1, 2
//         ]
//     },
//     {
//         "name": "John Jones",
//         "email": "john@example.com",
//         "job": "Engineer",
//         "location": "Manchester",
//         "array": [
//             4, 5, 1, 2, 3
//         ]
//     },
//     {
//         "name": "Gordon Bennett",
//         "email": "gordon@example.com",
//         "job": "Trader",
//         "location": "Glasgow",
//         "array": [
//             5, 1, 2, 3, 4
//         ]
//     }
// ]

import http from 'k6/http';

export default function(){
    let response = http.get("https://run.mocky.io/v3/c1c41b41-8e98-4297-89be-9d62f19dc178");

    // Read the response array
    let body = JSON.parse(response.body);

    // Will get error using body.data.forEach
    body.forEach(element => {
        console.log(`The name is ${element.name}`);
        console.log(`The email is ${element.email}`);
        console.log(`The job is ${element.job}`);
        console.log(`The location is ${element.location}`);

        // Get the array elements from the inner array
        element.array.forEach(elementArray => {
            console.log(`The value of the property array is  ${elementArray}`);
        });

    });

}
