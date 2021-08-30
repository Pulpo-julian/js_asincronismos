const btnClick = document.getElementById("btn-click");
const numClick = document.getElementById("num-clicks");
const btnSlow = document.getElementById("btn-slow");

let click = 0;

btnClick.onclick = () => {
    numClick.innerHTML = `number of clicks: ${++click}`;
}

const slow = (num) => {
    const limit = 10_000;
    for(i=0; i<limit; i++) {
        for (j = 0; j<limit; j++) {
            num **= 2;
            num = Math.sqrt(num);
        }
    }
    return num;
}

// btnSlow.onclick = () => {
//     console.time();
//     console.log(slow(4));
//     console.timeEnd();
// }

btnSlow.onclick = () => {
    const nums = [1.5, 2.5, 3.5, 4.5];
    for(var num of nums) {
        console.log(slow(num));
    }
}