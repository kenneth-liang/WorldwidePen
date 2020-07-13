var pens = 0 
var funds = 0 
var workforce = 0
var penCost = 0.25 

var materials = 1000
var matCost = 10

function sellPen(){
    pens += 1
    funds += penCost 
    materials -= 1
    document.getElementById("pens").textContent = pens;
    document.getElementById("funds").textContent = funds;
    document.getElementById("mat").textContent = materials;
}

function lowerPrice(){
    penCost -= .01
    document.getElementById("penprice").textContent = penCost
}

function raisePrice(){
    penCost += .01
    document.getElementById("penprice").textContent = penCost
}

function buyMat(){
    funds -= matCost 
    document.getElementById("funds").textContent = funds;
    materials += 200
    document.getElementById("mat").textContent = materials
    matCost += 5
    document.getElementById("matCost").textContent = matCost
}

