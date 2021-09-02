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

const getUserInfo = (id) => {
    fetch(`${url}/users?userId=${id}`)
        .then(res => res.json())
        .then(users => content.innerHTML += `<h4>User info</h4><p>${users[0].email}</p>`)
        .then(() => fetch(`${url}/posts?userId=${id}&_limit=3`))
        .then(res => res.json())
        .then(posts => {
            content.innerHTML += posts.map(post => 
                `<div><h4>${post.title}</h4></div>`    
            ).join('')
        })
        .catch(e => console.log(e));
}