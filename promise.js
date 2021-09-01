const f = () => new Promise((resolve, reject) => {
    const err = false;
    if (err) {
        reject('Error');
    } else {
        resolve('Value');
    }
});

const p = f();
console.log(p);