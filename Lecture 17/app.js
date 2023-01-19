// 1
// hide with the click of a button

document.getElementById("text").innerHTML = 'Here you can see a plain text, but wait til you see what happens when you click the button!';
document.getElementById("erase").innerHTML = 'Click me to erase the text!';

function myFunction1(){
    document.getElementById("text").style.display = "none";
}

// 2
// hiding button

document.getElementById("hide").innerHTML = 'Click to hide me';
function myFunction2(){
    document.getElementById("hide").style.display = "none";
}

// 3
// input changed by click

document.getElementById("changeText").innerHTML = 'Click me!';
function myFunction3(){
    const a = "Gotcha!";
    document.getElementById("changingText").value = a;
}

// 4
// return sqr of an input in alert

document.getElementById("square").innerHTML = 'Submit';
function myFunction4(){
    let a = document.getElementById("number").value;
    alert(`The answer is ${Math.pow(a,2)}`);
}

// 5
// swap 2 inputs

document.getElementById("swapInput").innerHTML = 'SWAP';
function myFunction5(){
    let a = document.getElementById("swap1").value;
    let b = document.getElementById("swap2").value;
    document.getElementById("swap1").value = b;
    document.getElementById("swap2").value = a;
}

// 6
// change color of input ------ need improvement to loop colors

document.getElementById("changeColor").innerHTML = 'Click me!';
function myFunction6(){
    // const colors = ["red", "green", "blue", "purple"];
    // for(i=0; i<=colors.length; i++){
    //     document.getElementById("changingColor").style.color = colors[i];
    // }
    // colors.forEach(i =>{
    //     document.getElementById("changingColor").style.color = colors(i++);
    // });
    document.getElementById("changingColor").style.color = "red";
}