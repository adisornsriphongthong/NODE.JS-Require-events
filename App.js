// Import the EventEmitter class from the 'events' module

// Create a class 'myEmitter' that extends EventEmitter
class myEmitter extends EventEmitter {};

// Create an instance of the 'myEmitter' class
const myEmitterInstance = new myEmitter();

// Define a function 'myEvent1' that logs 'Event1'
const myEvent1 = () => {
    console.log('Event1');
}

// Register 'myEvent1' as a listener for the 'Event1' event on 'myEmitterInstance'


myEmitterInstance.on('Event1', myEvent1); // Adds a listener function to the specified event.
myEmitterInstance.once('Event2', myEvent1); // Adds a one-time listener function for the specified event. It will be invoked only once.
myEmitterInstance.removeListener('Event1', myEvent1); // Removes a listener from the specified event.

setInterval(myFunction, 1000);

function myFunction(){
    myEmitterInstance.emit('Event1'); // Emits an event with an optional set of arguments.
}
