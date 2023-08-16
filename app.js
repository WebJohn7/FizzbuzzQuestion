/*Fizzbuzz interview question
Write for-loop that loop through 1 to 20
If the number is divisible by 3, print Fizz
If the number is divisible by 5, print Buzz
If the number is divisible by 3 and 5, print Fizzbuzz
If the number isn't divisible by either 3 or 5, print the number */

// Printing the numbers using for-loop 
for (let i = 1; i <= 20; i++ ) {
    // Printing FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log (`${i} -> FizzBuzz`)
    }
    //Printing Fizz
    else if (i % 3 === 0) {
        console.log (`${i} -> Fizz`)
    }
    //Printing Buzz
    else if (i % 5 === 0) {
        console.log (`${i} -> Buzz`)
    }
    //Printing the numbers
    else {
        console.log(`${i} -> ${i}`)
    }
}