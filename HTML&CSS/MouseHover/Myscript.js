document.getElementById("myid").addEventListener("mouseover", function () {
    document.getElementById("myid").style.backgroundColor = "red";
})

document.getElementById("myid").addEventListener("mouseout", function () {
    document.getElementById("myid").style.backgroundColor = "green";
})

function showbtn() {
    document.getElementById("myid").style.display = "block";
}

function hidebtn() {
    document.getElementById("myid").style.display = "none";
}

function togglebtn() {
    let x = document.getElementById("myid");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}
