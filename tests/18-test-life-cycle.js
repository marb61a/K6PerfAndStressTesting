// Test Lifecycle

// 1 - Init
var counter = 1;

// 2 - Setup 
// This will be called once before load test starts
// It is called one time, there will be no iteration in logs
export function setup(){
    console.log(`Inside setup ${counter}`);
    // Will be the data passed to main
    return "Today is Wednesday";
}

// 3 - Default
// The main function which is the default entry point for virtual users
// Data can be anything - Will return undefined
export default function(data){
    console.log(`Inside default ${counter} VU=${__VU} ITER=${__ITER} DATA is ${data}`);
    counter = counter + 1;
}

// Teardown
// This function gets called once default function has finished
// It is called one time, there will be no iteration in logs
export function teardown(data){
    console.log(`Inside teardown ${counter} DATA is ${data}`);
}
