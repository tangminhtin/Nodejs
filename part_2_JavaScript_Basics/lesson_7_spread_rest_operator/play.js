const hobbies = ['Sport', 'Cooking', 'Play game'];

// copy an array
const copiedArray = hobbies.slice();
console.log(copiedArray);

// copy an array to an nested array
const copiedInner = [hobbies];
console.log(copiedInner);

// copy an array to new an array
const copiedNewArray = [...hobbies];
console.log(copiedNewArray);


// function return array
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3));
console.log(toArray(1, 2, 3, 4, 5)); // no error, but some arguments was miss

// function return array with multiple arguments
const toArrayMultiple = (...args) => {
    return [...args];
};

console.log(toArrayMultiple(1, 2, 3, 4, 5, 6, 7));

// short function return array with multiple arguments
const toShortArrayMultiple = (...args) => args;

console.log(toShortArrayMultiple(8, 7, 6, 5, 4, 3, 2, 1));
 

// object
const person = {
    name: 'Tang Minh Tin',
    age: 21,
    greet() {
        console.log('Hello, I am ' + this.name);
    }
}

console.log(person);

// copy object by rest of operator
const copiedObjet = {...person};
console.log(copiedObjet);
