//export(named export) use curly braces {} to importing ,when u want to export multiple variables,functions or classes from a file
export function add(m,n){
    return m+n;
}

export const PI=3.14159;

export function div(k,j){
return k/j
}

//export default(default export):-without curly braces {} while importing, when a file has one main thing to export that time export default will be used.
//only one default is allowed per file

export default function mul(j,k){
return j*k;
}

