const person = {
    name: 'Minh Tin Tang',
    age: 21,
    hello1: () => {
        console.log('Hello1, I am ' + this.name);
    },
    hello2: function() {
        console.log('Hello2, I am ' + this.name);
    },
    hello3() {
        console.log('Hello3, I am ' + this.name);
    }
};

person.hello1();
person.hello2();
person.hello3();


