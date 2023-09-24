function add() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let res = parseFloat(num1+num2);
    console.log("Clicked addition button");
    document.getElementById("result").innerHTML=res;
    console.log(res);
}

function subtract() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let res = parseFloat(num1-num2);
    console.log("Clicked subtraction button");
    document.getElementById("result").innerHTML = res;
    console.log(res);
}

function multiply() {
    let A = document.getElementById("num1").value;
    let C = document.getElementById("num2").value;
    let D = 0;
    console.log("Clicked multiplication button");
    D = parseInt(A) * parseInt(C);
    document.getElementById("result").innerHTML = D;
    console.log(D);
}

function divide() {
    let A = document.getElementById("num1").value;
    let C = document.getElementById("num2").value;
    let D = 0;
    console.log("Clicked division button");
    D = parseInt(A) / parseInt(C);
    document.getElementById("result").innerHTML = D;
    console.log(D);
}