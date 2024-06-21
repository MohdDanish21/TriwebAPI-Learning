
// while (queue.waitForMessage()) {
//     queue.processNextMessage();
//   }

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout callback');
// }, 2000);

// console.log('End');

console.log(".....................................................");

console.log("Before delay");

function delayBySeconds(sec) {
   let start = now = Date.now()
   while(now-start < (sec*1000)) {
     now = Date.now();
   }
}

delayBySeconds(5);

// Executes after delay of 5 seconds
console.log("After delay");

