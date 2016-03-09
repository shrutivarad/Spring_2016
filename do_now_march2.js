//alert("hi")
var list = ["Hola", "Guten Tag", "Ni hao", "Bonjour"];

var giveGreeting = function(){
	var index = Math.floor(Math.random() * list.length);
	return list[index];
}


var addMessage = function(message){
	list.push(message);
}

var name = prompt("What's your name?");
alert(giveGreeting() + ", " + name + "!");
var newMessage = prompt("Add your greeting!");
addMessage(newMessage);