// print even number up to n

for (let i = 1; i<=5; i++){
    if(i%2==0){
        console.log("even",i);
    }
    }
    console.log("..............................");

// print even numbers 1 to n
    for (let i = 1; i<=50; i++){
        if(i%2==0){
            console.log("even",i);
        }
        }
        console.log("..............................");


// print even numbers 1 to n
for (let i = 1; i<=10; i++){
    if(i%2==!0){
        console.log("even",i);
    }
    }
    console.log("..............................");


    // Initializing numbers array
let numbers = [10, 23, 12, 21];

// Declaring empty Even array
let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}

// Printing output
console.log(`Even numbers in an array are: ${even}`);
