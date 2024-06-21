// 1.what is nodejs?

// Node.js is an open source server environment
// Node.js is free
// Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
// Node.js uses JavaScript on the server

//2.why nodejs?

// Node.js uses asynchronous programming!

// A common task for a web server can be to open a file on the server and return the content to the client.

// Here is how PHP or ASP handles a file request:

// Sends the task to the computer's file system.
// Waits while the file system opens and reads the file.
// Returns the content to the client.
// Ready to handle the next request.
// Here is how Node.js handles a file request:

// Sends the task to the computer's file system.
// Ready to handle the next request.
// When the file system has opened and read the file, the server returns the content to the client.

// 3.What Can Node.js Do?

// Node.js can generate dynamic page content
// Node.js can create, open, read, write, delete, and close files on the server
// Node.js can collect form data
// Node.js can add, delete, modify data in your database

//4. What is a Node.js File?

// Node.js files contain tasks that will be executed on certain events
// A typical event is someone trying to access a port on the server
// Node.js files must be initiated on the server before having any effect
// Node.js files have extension ".js"

// 5.Why nodejs is better than php?,29,1 and why nodejs,while we have java,python,php,ruby?

// easy, speed, same language across stack MERN AND MEAN,


//6. What is REPL?
//Read :-Read user input and parse it and convert it to javascript data.
//eval :-it evaluate 
//print:-print 
// loop:-Run the loop with continue looping

// 7 . what is event loop?
// Because of event loop model javascript never blocks.
//Responsible for executing the code
//collecting and processing events
//executing queued sub tasks.

//The event loop is what allows Node.js to perform non-blocking I/O operations  
//  -despite the fact that JavaScript is single-threaded 
//— by offloading operations to the system kernel whenever possible.

// 8. what is queue?
//A JavaScript runtime uses a message queue, which is a list of messages to be processed.
// Each message has an associated function that gets called to handle the message.

// wait synchronously for a message to arrive.

//9. What is destructuring?
//we can extract data from arrays and objects and assign them to variables 