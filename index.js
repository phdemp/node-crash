//console.log(global);
//console.log(process);
//const {generateRandomnumber, celsiustofahrenheit, fahrenheittocelsius} = require('./util');
//console.log (`Generate Random no ${generateRandomnumber()}`);
//console.log (`Temperature in Fahrenheit ${celsiustofahrenheit(39)} `);
//console.log (`Temperature in Celsius ${fahrenheittocelsius(102.2)}`);

import getPosts,{getPostslen} from "./postcontroller.js";
console.log(getPosts());
console.log(`number of posts are: ${getPostslen()}`);
