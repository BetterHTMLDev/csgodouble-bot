//  CONFIG // © BetterHTMLDev 2016
var betAmount = 10 ;  //Wieviele Coins willst du wetten?
var color = "black"; // Auf welche Farbe willst du setzten?
var style = "normal"; // Stelle auf "black" um ein neues Design zu wählen 
//

var on = true;
var $balance=$("#balance")
var status = "";
var last = 15;
var betitdouble = betAmount;
var canbet = 1;
var win = "/";
var gewonnen = 0;
var verloren = 0;
var can = 1;
var versuche = 0;
function role(){
	
	info();
   if(on == true){	
	if(getStatus() == "end"){
		setLast();
		canbet = 1;
		  if(document.getElementById("betAmount").value != ""){	
					
			
			if(getLastColor() == color){
				console.log("Du hast " + document.getElementById("betAmount").value + " Coins gewonnen\nDein Kontostand: " + getMoney());
				win = "Gewonnen";
			   if(can != 0){	
				gewonnen+=1;
				can = 0;
				}
			}else{
				console.log("Du hast " + document.getElementById("betAmount").value + " Coins verloren\nDein Kontostand: " + parseInt($balance.text()));
				win = "Verloren";
			   if(can != 0){	
				verloren+=1;
				can = 0;
			   }
			}
		}			
	}
	if(getStatus() == "countdown"){	
		bet();
		can = 1;
	}
	if(getStatus() == "waiting"){
		
	}
	}
	setTimeout(role,1500);	

}
function getBotStatus(){
	if(on){
		return "An";
	}else{
		return "Aus";
	}
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
function info(){
	$('#getbal').hide();
	
	$('.btn-group').html("<span style='font-weight:bold;font-size:18px'>Bot-Status: " + getBotStatus() + " <br>Letzte Runde: " + win + "<br>Dein normaler Einsatz: " + betAmount + "<br>Aktueller Einsatz: "+betitdouble+"<br>Gewonnene Runden: "+gewonnen + "<br>Verlorene Runden: " + verloren + "<br>Versuche insgesamt: " + versuche);
	
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
function turnOff(){
	if(document.getElementById("checki").checked){
		on = true;
	}else{
		on = false;
	}
	
}

$('.navbar-brand').html("<span id='onoroff'>Bot An-/Ausschalten - <input type='checkbox' id='checki' onClick='turnOff()' checked ></input></span>");

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
function check(){
	var i = betAmount;
	var money = Number(getMoney());
	
	while(i < money){
		i=i*2;		
		versuche+=1;
		
	}
	
}
function getLastColor(){
		if(last == 0){
			return "green";
		}
		if(last > 0 && last <=7){
			return "red";
		}
		if(last > 7 && last < 15){
			return "black";
		}
		if(last == 15){
			return color;
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
var bcolor = "#2E2E2E";
function designChat(){
    $('.divchat div').css({'background-color': bcolor ,'border':'solid','color':'white','borderColor':'gray'});
    $('.divchat').css({'background-color':bcolor});
    $('.divchat a').css('color','white');
      $('#tab1').css({'backgroundColor':'#2E2E2E'});
      $('#pullout').css({'borderRight':'solid'});
    $('#pullout').css({'backgroundColor':'#2E2E2E'}); 
    setTimeout(designChat,10);
    
}  
function designSidebar(){
    $('#sidebar').css({'backgroundColor':bcolor}); 
    $('#sidebar').css({'border':'solid'});
}
function designBackground(){
      $('body').css({'backgroundColor':'#2E2E2E'}); 
    
}   
function hideT(){
    $('.noselect').hide();
    $('.pull-left').hide();
    $('#betAmount').hide();
}
function designNav(){
    $('.navbar').css('backgroundColor',bcolor);  
    $('.navbar').css('border','solid');   
}
function designAlert(){
    $('.well p').hide();
    
    $('.alert').html("Coins: " + $balance.text());  
    $('.alert').css({'color':'black','fontWeight':'600'});
    setTimeout(designAlert,100);
}
function designModal(){
    $('#betAmount').hide();
    $('.modal-title b').html("Eigene Wette abgeben");   
    $('.modal-body').html("<div class='modal-body-1'></div><div class='modal-body-2'></div><div class='modal-body-3'>");

    $('.modal-body-1').html('<button type="button"  class="btn btn-default betshort" id="bclear" onclick="betClear()">Clear</button><button type="button" onClick="betLast()" class="btn btn-default betshort" id="blast" >Last</button><button type="button" onclick="betAdd(1)" id="bp1" class="btn btn-default betshort" >+1</button>	<button type="button" onclick="betAdd(10)" id="bp10"class="btn btn-default betshort" >+10</button><button type="button" id="bp100" onclick="betAdd(100)" class="btn btn-default betshort">+100</button><button type="button" id="bp1000" onclick="betAdd(1000)"class="btn btn-default betshort" >+1000</button><button type="button" onclick="betHalf()" id="bphalf" class="btn btn-default betshort" > 1/2 </button><button type="button" id="bpdouble" onclick="betDouble()" class="btn btn-default betshort" >  x2  </button><button id="bpmax" type="button" onclick="betMax() class="btn btn-default betshort">Max</button>');
    $('.btn-group').css("marginBottom","15px");
    $('.modal-body-2').html("<input type='text' id='mybetNew' placeholder='Deine Wette...' style='height: 46px;padding: 10px 16px;font-size: 18px;line-height: 1.3333333;border-radius: 6px;width:100%;border:1px solid #ccc;color:#555'></input>");
    $('.modal-body-3').html("<ul class='ulb'><li class='lib'><button class='btn btn-danger btn-lg btn-block betButton' id='betRed' style='width:100%'><span id='bamount'>0</span> auf Rot</button></li><li class='lib'><button style='width:100%' class='btn btn-success btn-lg btn-block betButton' id='betGreen'><span id='bamount'>0</span> auf Grün</button></li><li class='lib'><button class='btn btn-inverse btn-lg btn-block betButton'style='width:100%' id='betBlack'><span id='bamount'>0</span> auf Schwarz</button></li></ul>");
    $('.lib').css({'display':'inline-block','width:':'200px','marginLeft':'42px','marginTop':'25px'});
    
    $('.modal-footer button btn-success').hide();
    
} 



if(style == "black"){
	designChat();
	designSidebar();
	designBackground();
	hideT();
	designNav();
	designAlert();
}

if(Number(getMoney()) != 0){
	console.warn("Bot wurde gestartet  © 2016 - BetterHTMLDev\nTipp: Zum stoppen die Seite neuladen.");
	document.getElementById("balance").style.color = "green";
	
	role();
	
}else{
	console.warn("Bot konnte nicht gestartet werden. Du hast keine Coins.");
}


