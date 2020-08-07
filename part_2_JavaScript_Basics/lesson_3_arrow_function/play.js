const name = "Minh Tin Tang"
let age = 21
const address = "Tien Giang"

// implicit function
const userInfo = function(name, age, address) {
    return (
        'Name is ' + name +
        ', age is ' + age +
        ' and the user address is ' + address
    );
}

console.log(userInfo(name, age, address));


// arrow function
const newUserInfo = (name, age, address) => {
    return (
        'Name is ' + name +
        ', age is ' + age +
        ' and the user address is ' + address
    );
}

console.log(newUserInfo("Minh Tin", 20, "Can Tho"));


// short arrow function
const add = (a, b) => {
    return a + b;
}

console.log(add(5, 3));


// short arrow function with 2 parameters
const sub = (a, b) => a - b;
console.log(sub(3, 6));

// short arrow function with 1 parameters
const mul = a => a * 3;
console.log(mul(4));

// short arrow function no parameters
const sayHello = () => 'Hello everyone';
console.log(sayHello())
