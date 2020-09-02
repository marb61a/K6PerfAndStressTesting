// Test Lifecycle

// 1 - Init
var counter = 1;

// 2 - Setup 
// This will be called once before load test starts
// It is called one time
export function setup(){
    console.log(`Inside setup ${counter}`);
}

// 3 - Default
// The main function which is the default entry point for virtual users
export default function(){
    console.log(`Inside setup ${counter} VU=${__VU} ITER=${__ITER}`);
    counter = counter + 1;
}

// Teardown
// This function gets called once default function has finished
// It is called one time
export function teardown(){
    console.log(`Inside setup ${counter}`);
}
