var theCanvas = document.getElementById("theCanvas");
var c = theCanvas.getContext("2d");
var current = 0;
var voltage = 0;
var time = 0;
var dy = 0;  //change in y value
var yM = 225; //y value of mercury thread (19 deg)
var on = 0;
var timer = 0;

    
drawSetup();	
    
function drawSetup(){
c.clearRect(0, 0, theCanvas.width, theCanvas.height);

c.beginPath();

c.fillStyle="black"; 
c.fillRect(190,330, 70, 35); //clock

c.fillStyle="white"; //colour of water
c.fillRect(31,310, 93, 64);
c.fillRect(200,340, 50, 15); //clock display area

c.fillStyle="#aaaaaa"; //colour of thermometer
c.fillRect(70,55, 10, 295); //thermometer
c.fillRect(16,300, 13, 90); //insulation lhs
c.fillRect(29,375,97,15); // in. base
c.fillRect(126,300,13,90);	// in. rhs
c.fillRect(16,290, 123, 10); //insulation top
    
c.fillStyle="red"; //colour of alcohol thread
c.fillRect(71,340,8,9); // bulb
c.fillRect(74,yM,2,350-yM);// thread
c.fill();

for(i=70; i<=320; i+=5){ 
c.moveTo(80,i); //small markings rhs therm
c.lineTo(75,i);
}
for(i=70; i<=320; i+=25){ 
c.moveTo(80,i); //big markings rhs therm
c.lineTo(70,i);
}
c.font="14px Arial";
c.strokeText("0",85,323);   //numbers on therm.
c.strokeText("10",85,273);
c.strokeText("20",85,223);
c.strokeText("30",85,173);
c.strokeText("40",85,123);
c.strokeText("50",85,73);

c.rect(70,55, 10, 295); //outline of therm.
c.strokeText(current.toFixed(1)+" A",204,263); //Ammeter display
c.strokeText((0.1*time).toFixed(2)+" s",203,353); //Clock display
c.moveTo(15,290);
c.lineTo(15,390); //lhs outer container
c.lineTo(140,390); //base
c.lineTo(140,290); //rhs
c.moveTo(30,300);
c.lineTo(30,375); //lhs beaker
c.lineTo(125,375); //base
c.lineTo(125,300); //rhs

c.moveTo(40,200); //top lhs wire 
c.lineTo(40,365);
c.lineTo(45,360);
c.lineTo(50,370);
c.lineTo(55,360);
c.lineTo(60,370);
c.lineTo(65,360);
c.lineTo(70,370);
c.lineTo(75,360);
c.lineTo(80,370);
c.lineTo(85,360);
c.lineTo(90,370);
c.lineTo(95,360);
c.lineTo(100,370);
c.lineTo(105,360);
c.lineTo(110,365);
c.lineTo(110,260);
c.moveTo(40,200);
c.lineTo(140,200);
c.moveTo(140,185);
c.lineTo(140,215);
c.moveTo(145,190);
c.lineTo(145,210);
c.moveTo(150,200);
c.lineTo(155,200);
c.moveTo(160,200);
c.lineTo(165,200);
c.moveTo(170,200);
c.lineTo(175,200);
c.moveTo(180,185);
c.lineTo(180,215);
c.moveTo(185,190);
c.lineTo(185,210);
c.moveTo(185,200);
c.lineTo(200,200);
c.rect(200,190,60,20); //variable resistor
c.moveTo(260,200);
c.lineTo(300,200);
c.lineTo(300,215);
c.arc(300,218,3,0,2*Math.PI); //top connection
c.moveTo(300,240);
c.arc(300,242,3,0,2*Math.PI); //bottom connection
c.moveTo(300,245);
c.lineTo(300,260);
c.lineTo(240,260);
c.arc(220,260,20,0,2*Math.PI); //ammeter
c.moveTo(200,260);
c.lineTo(110,260);
c.moveTo(200,220); //end of arrow for rheostat
c.lineTo(260,180); //tip
c.lineTo(250,183);
c.moveTo(260,180);
c.lineTo(253,188);
c.moveTo(300,240); //Top of bottom connection point
if(on == 1){
    c.lineTo(300,221); //circuit closed
}
else{
    c.lineTo(310,222); //circuit open
}
    
    c.stroke();
}

function resistance(){

    Slider1 = document.getElementById("Slider1");
    Resistance = Number(Slider1.value);
    voltage = 12 - ((48 - Resistance)/4);
    current = voltage/4.17; //4.17 ohms is resistance of heating element

    drawSetup();
    }
    
function powerOn(){
    window.clearTimeout(timer);
    on = 1;
    run();
    }
    
function run(){		
    
    if (on == 1){			
        time++;	
        dy = 0.01*time*current*current;
        //document.getElementById("demo").innerHTML = current;
        yM=225-dy; 
    
    if(yM > 70){	
        drawSetup();
        }
    }
    timer = window.setTimeout(run, 30);
}

    function powerOff(){
        on = 0;
        drawSetup();
    }
    
    function reset(){
    //current = 0;
    voltage = 0;
    time= 0;
    dy = 0;  //change in y value
    yM = 225; //y value of mercury thread (19 deg)
    on = 0;
    drawSetup();
    }	
