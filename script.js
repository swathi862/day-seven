
// var greeting = document.querySelector("Hello World");

var greeting = "Hello, World!";

document.querySelector("#hello-container").innerHTML = greeting;

var choresArray = ["make the bed", "tidy up room", "laundry clothes", "wash dishes", "take out the trash", "vacuum"]

for(var i = 0; i < choresArray.length; i++){
    document.querySelector("#chores-container").innerHTML += `<ul> 
        <li>${choresArray[i]}</li>
    </ul>`
}