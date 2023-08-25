// radnomimage_1

var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg = "dice"+ randomnumber1 + ".png";
var  randomimg = "images/" + randomdiceimg ;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimg);


// randomimage_2

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg2 = "dice"+ randomnumber2 + ".png";
var  randomimg2 = "images/" + randomdiceimg2 ;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimg2);


// result

if(randomnumber1 > randomnumber2){
	document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}
else if (randomnumber1 < randomnumber2) {
	document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
else if (randomnumber1 === randomnumber2) {
	document.querySelector("h1").innerHTML = "DRAW";
}
else {
	document.querySelector("h1").innerHTML = "Refresh Me";
}
