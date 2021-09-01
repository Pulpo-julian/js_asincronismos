const btnClick = document.getElementById("btn-click");
const numClick = document.getElementById("num-clicks");
const btnSlow = document.getElementById("btn-slow");

let clicks = 0;
btnClick.onclick = () => {
    numClick.innerHTML = `number of clicks: ${++clicks}`;
}

const calculate = (num) => {
    const limite = 8_000;
    for(i=0; i < limite; i++) {
        for(j=0; j < limite; j++) {
            num **= 2;
            num = Math.sqrt(num);
        }
    }

    return num;
}

// btnSlow.onclick = () => {
//     console.time();
//     console.log(calculate(3));
//     console.timeEnd();
// }

btnSlow.onclick = () => {
    let datos = [1.5, 2.5, 3.5, 4.5];
    for(number of datos) {
        console.time();
        console.log(calculate(number));
        console.timeEnd();
    }
}


