const EventEmitter = require('events');

class Events extends EventEmitter {}

const events = new Events();

const event = (number) => {
    console.log(10 + number);
}

events.on('Event1', () => {
    event(10);
});

events.emit('Event1');

const fs = require('fs');

const readFile = fs.createReadStream('./text.txt');

readFile.on('data', (data) => {
    console.log(data.toString());
})
