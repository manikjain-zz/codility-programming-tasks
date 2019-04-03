// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    // convert N to binary form
    bN = N.toString(2);
    // convert binary form to array
    bN_list = [...bN+''].map(n=>+n);
    // initialize maximum final count and temp current count
    let max_count = 0, current_count = 0;
    // Loop over all digits of the binary number starting from the second digit
    for(i=1; i<bN_list.length; i++) {
        // check for the first occurence of 0
        if(bN_list[i] === 0) {
            current_count += 1;
        } else if(bN_list[i] === 1) { // check if digit is equal to 1 and assign the final count
            max_count = Math.max(current_count, max_count);
            current_count = 0;
        }
    }
    return max_count;
}
