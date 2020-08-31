import { Counter } from 'k6/metrics';
var myCounter = new Counter('my counter');

export default function(){
    // Counter will add the 2 numbers together
    // Can be useful in providing timeout values for API responses
    // EG perform API call for a maximum 5 times until getting the wanted response
    // Anything else and there can be a different response
    myCounter.add(1);
    myCounter.add(2);

}
