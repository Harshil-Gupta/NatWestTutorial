setInterval(function(){
    document.getElementById("clock").innerText = new Date().toLocaleString();  
  },1);

function add() {
    let numbers = document.getElementById("numbers");
    let res = 0;
    for(x of numbers){
        res += parseFloat(x.value);
    }
    console.log(res);
    document.getElementById("addresult").innerText="Addition of all numbers in drop down gives result as: " + res;
}

function square() {
    let numbers = document.getElementById("numbers");
    let res = 0;
    for(x of numbers){
        res += parseFloat(x.value)*(parseFloat(x.value));
    }
    console.log(res);
    document.getElementById("squareresult").innerText="Square of all numbers in drop down gives result as: " + res;
}

function valid() {
    let numbers = document.getElementById("numbers");
    let res = 0;
    for(x of numbers){
        if(parseFloat(x.value)>0){
            res+= x.value + " ";
        }
    }
    console.log(res);
    document.getElementById("validresult").innerText="All valid numbers in drop down are: " + res;
}

function add2list() {
    let number = document.getElementById("num1").value;
    let numbers = document.getElementById("numbers");
    let new_number = document.createElement("option");
    new_number.innerText = number;
    numbers.append(new_number);
}