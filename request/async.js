const url = "https://jsonplaceholder.typicode.com";

const btnClick = document.getElementById("btn-click");
const numClick = document.getElementById("num-clicks");
const btnSlow = document.getElementById("btn-slow");
const content = document.getElementById("content");

let clicks = 0;

btnClick.onclick = () => {
    numClick.innerHTML = `number of clicks: ${++clicks}`;
}

btnSlow.onclick = () => getUserInfo(1);
