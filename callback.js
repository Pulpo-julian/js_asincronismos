function primero(segundo) {
    setTimeout(function () {
        console.log("primero");
        segundo();
    }, 3000);
}

function segundo() {
    console.log("segundo");
} 

primero(segundo);