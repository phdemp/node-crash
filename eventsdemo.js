import { EventEmitter } from 'events';

const emitter = new EventEmitter();

function greethandler(name){
    console.log(`Hello ${name}`);
}

function goodbyehandler(name){
    console.log(`Goodbye ${name}`);
}

emitter.on('greet', greethandler);
emitter.on('goodbye', goodbyehandler);

emitter.emit('greet', 'Sudeep');
emitter.emit('goodbye', 'Sudeep');

emitter.on('error', (err) =>{
    console.log('An Error Occurred:',err);
});

emitter.emit('error', new Error('Something went wrong'));