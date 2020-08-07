// object
const person = {
    name: 'Tang Minh Tin',
    age: 21,
    greet() {
        console.log('Hello, I am ' + this.name);
    }
};

// function print name
const printName = (personData) => {
    console.log(personData.name);
};

printName(person);

// object destructuring
const printNameAndAge = ({ name, age }) => {
    console.log('Your name is ' + name + " and age is " + age);
};

printNameAndAge(person);

// object destructuring
const {name, age} = person;
console.log(name, age);


// array
const hobbies = ['Sport', 'Cooking', 'Play game'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1 + ' - ' + hobby2);

