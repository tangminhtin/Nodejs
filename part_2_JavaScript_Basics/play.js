// variable
var name = 'Minh Tin Tang';
var age = 21;
var hasHobbies = true;

// function
function userInfo(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName +
        ', age is ' + userAge + 
        ' and the user has hobbies: ' + userHasHobby
    );
}

console.log(userInfo(name, age, hasHobbies));
