const name = 'Minh Tin Tang';   // const declarations are block scoped, const cannot be updated or re-declared
let age = 21;               // let is block scoped, let can be updated but not re-declared.
var hasHobbies = true;      // var declarations are globally scoped or function/locally scoped, var variables can be re-declared and updated

// function
function userInfo(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName +
        ', age is ' + userAge + 
        ' and the user has hobbies: ' + userHasHobby
    );
}

console.log(userInfo(name, age, hasHobbies));
