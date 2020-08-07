/*
// callback
const fecthData = callback => {
    setTimeout(() => {
        console.log('Done 1!');
    }, 1500);
};

// set timer
setTimeout(() => {
    console.log('Timer is done 1!');
    fecthData(text => {
        console.log(text);
    });
}, 2000);

console.log('Hello 1!');
console.log('Hi 1!');
*/


// promise
const fecthNewData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Done 2!');
        }, 1500);
    });
    return promise;
};

// set timer
setTimeout(() => {
    console.log('Timer is done 2!');
    fecthNewData()
        .then(text => {
            console.log(text);
            return fecthNewData();
        })
        .then(text2 => {
            console.log(text2);
        })
}, 2000);

console.log('Hello 2!');
console.log('Hi 2!');
