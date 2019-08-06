canvasHeight = 600;
canvasWidth = 600;
var x = 300
var y = 300
var speedX = 3
var speedY = 3

//step1- declare variable!
//step2- intialize!
//step3- Use! 

function setup(){
    createCanvas(canvasHeight,canvasWidth);
background(0);
}

function draw() {
    createCanvas(canvasHeight,canvasWidth)//create canvas inside so this way theres no mirage ogf ball//
    background(51)
    fill("red");
    rect(0,50,50,50)
    fill("white");
    ellipse(x,y,30,30);
    x =  x + speedX; //kaeep it at speed that mathb.random has set
   y = y + speedY;
    
    
            //math. ciel rounds it up, random between 1-3//for bounce
    
     if(mouseX >= 500){
            speedX = -(Math.ceil(Math.random())* 7)

        }else if (mouseX <= 100) {
            speedX = (Math.ceil(Math.random())*7)

        }else if(mouseY >= 500){
            speedY = -(Math.ceil(Math.random())*7)
            
        }else if(mouseY <= 100){
            speedY = (Math.ceil(Math.random())*7)
        
        }
        if(x>width||x>canvasHeight){//if300islessthan600alertmake...
            alert("Game Over")
            
        }
        alert("make sure to avoid the red lines")
        alert = function(){};

        if(y>600){
            alert("Game Over")
            
        }
        alert("Game Over")
    }
    mousePressed(); {
    if(mouseX>0&&)
    }

    