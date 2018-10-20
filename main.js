let userName = prompt("what is your name?"); 

let michael = confirm("just checking, is" + userName + "your real name?");

if (michael){
    alert("welcome to my page, "+ userName + "!");
}
else{
    userName = prompt("okay, what is your name?");
}

console.log("the user's name is" + userName + ".")









