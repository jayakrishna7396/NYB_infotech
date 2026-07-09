//module
//import ;- to bring exported code from another file 
import {add,PI} from "./modules1.js";//import named export
import {sub} from "./modules2.js"
console.log(add(5,10));
console.log(PI); 
console.log(sub(5,2))

import mul,{div} from "./modules1.js";
console.log(mul(5,3))

console.log(div(5,20))

import login from "./modules2.js"//import default export
login()