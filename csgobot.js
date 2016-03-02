//  CONFIG // © Eyk Rehbein 2016
var betAmount = 10 ;  //Wieviele Coins willst du wetten?
var color = "red"; // Auf welche Farbe willst du setzten?
//


var $balance=$("#balance")
var status = "";
var last = 1;
var betitdouble = betAmount;
var canbet = 1;
function role(){
  	
	if(getStatus() == "end"){
		setLast();
		canbet = 1;
		  if(document.getElementById("betAmount").value != ""){	
			if(getLastColor() == color){
				console.log("Du hast " + document.getElementById("betAmount").value + " Coins gewonnen\nDein Kontostand: " + getMoney());
			}else{
				console.log("Du hast " + document.getElementById("betAmount").value + " Coins verloren\nDein Kontostand: " + parseInt($balance.text()));
			}
		}			
	}
	if(getStatus() == "countdown"){	
		bet();
	}
	setTimeout(role,1500);	

}
function getStatus(){
	str = document.getElementById("banner").innerHTML;
	if(str.match("Rolling in")){
		status = "countdown";
		return status;
	}
	if(str.match("Confirming")){
		status = "waiting";
		return status;
	}
	if(str.match("ROLLING")){
		status = "ROLLING";
		return status;
	}
	if(str.match("rolled")){
		status = "end";
		return status;
	}

}
function getMoney(){
   return parseInt($balance.text());
}
function setLast(){
	if(getStatus() == "end"){
		str = document.getElementById("banner").innerHTML;
		if(str.match("rolled 0!")){
			last = 0;
			
		}
		if(str.match("rolled 1!")){
			last = 1;
			
		}
		if(str.match("rolled 2!")){
			last = 2;
			
		}
		if(str.match("rolled 3!")){
			last = 3;
			
		}
		if(str.match("rolled 4!")){
			last = 4;
			
		}
		if(str.match("rolled 5!")){
			last = 5;
			
		}
		if(str.match("rolled 6!")){
			last = 6;
			
		}
		if(str.match("rolled 7!")){
			last = 7;
			
		}
		if(str.match("rolled 8!")){
			last = 8;
			
		}
		if(str.match("rolled 9!")){
			last = 9;
			
		}
		if(str.match("rolled 10!")){
			last = 10;
			
		}
		if(str.match("rolled 11!")){
			last = 11;
			
		}
		if(str.match("rolled 12!")){
			last = 12;
			
		}
		if(str.match("rolled 13!")){
			last = 13;
			
		}
		if(str.match("rolled 14!")){
			last = 14;

		}
		
	}
	
}


function getPanel(){
	if(color == "red"){
		return "panel1-7";
	}
	if(color == "green"){
		return "panel0-0";
	}
	if(color == "black"){
		return "panel8-14";
	}
}
function getLastColor(){
		if(last == 0){
			return "green";
		}
		if(last > 0 && last <=7){
			return "red";
		}
		if(last > 7){
			return "black";
		}
	
}
function bet(){
	
	 if(canbet != 0){
		if(getLastColor() != color){
			betitdouble = betitdouble*2;
			document.getElementById("betAmount").value = betitdouble;  
			 canbet = 0;
			$('#' + getPanel() + ' button').click();
			console.warn("Der Einsatz wurde verdoppelt. Er liegt jetzt bei " + betitdouble + " Coins");	
			
		}
		if(getLastColor() == color){
			document.getElementById("betAmount").value = betAmount;
			betitdouble = Number(betAmount);
			 canbet = 0;
			 $('#' + getPanel() + ' button').click();
			
			 console.warn("Es wurden " + betAmount + " Coins gesetzt"); 
		}
	}			
		
}
if(Number(getMoney()) != 0){
	console.warn("Bot wurde gestartet  © 2016 - Eyk Rehbein\nTipp: Zum stoppen die Seite neuladen.");
	role();
	
}else{
	console.warn("Bot konnte nicht gestartet werden. Du hast keine Coins.");
}

