//example for modules in nodejs

function add(a,b){
    return a + b
}

const sub = (a, b) => {
    return a - b
}

module.exports = {
    add,
    sub,
}

//or i can also export it like for example

// exports.add = add;

// exports.sub = sub;

//there is also the another way to write a function and export it

// exports.add = (a , b) =>{return a + b}

// exports.sub = (a , b) =>{return a - b}
