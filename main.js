var pens = 0 
var funds = 0 
var workforce = 0
var penCost = 0.25 

function sellPen(){
    pens += 1
    funds += penCost 
    document.getElementById("pens").textContent = pens;
    document.getElementById("funds").textContent = funds;
}

function lowerPrice(){
    penCost -= .01
    document.getElementById("penprice").textContent = penCost
}

function raisePrice(){
    penCost += .01
    document.getElementById("penprice").textContent = penCost
}