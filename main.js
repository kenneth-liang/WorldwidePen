var pens = 0 
var funds = 0 
var penCost = 0.25 

var materials = 1000
var matCost = 10

var hireCost = 5 
var workForce = 0;

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
    if (matCost > funds) return
    funds -= matCost 
    document.getElementById("funds").textContent = funds;
    materials += 200
    document.getElementById("mat").textContent = materials
    matCost += 5
    document.getElementById("matCost").textContent = matCost
}

function hirePerson(){
    if (hireCost > funds) return 
    funds -= hireCost
    document.getElementById("funds").textContent = funds;
    workForce++
    document.getElementById("workForce").textContent = workForce;
    hireCost += 5; 
    document.getElementById("hireCost").textContent = hireCost;

    //autoclicker 
    setInterval(function() { 
        sellPen();
    },400)
}

