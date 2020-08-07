// array
const hobbies = ['Sports', 'Cooking', 'Play game'];

for(let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return "Hobby is " + hobby;
}))

console.log(hobbies.map(hobby => 'Hobby is ' + hobby));

console.log(hobbies);
