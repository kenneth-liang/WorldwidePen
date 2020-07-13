var pens = 0 
var funds = 0 
var penCost = 0.25 

var materials = 1000
var matCost = 10

var hireCost = 5 
var workForce = 0;
var penSaleRate = 2;

function sellPen(){

    if (materials <= 0) {
        materials = 0;
        document.getElementById("mat").textContent = 0;
    } else {
        materials -= 1;
        pens += 1;
        funds += penCost;
        document.getElementById("mat").textContent = materials;
        document.getElementById("pens").textContent = pens;
        document.getElementById("funds").textContent = funds;
    }

    // if we cannot afford any materials to continue play
    if (materials === 0 && funds < matCost){
        loseGame();
    }
}

function lowerPrice(){
    penCost -= .01
    document.getElementById("penprice").textContent = penCost;
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
    hireCost += 2; 
    document.getElementById("hireCost").textContent = hireCost;

    //autoclicker 
    setInterval(function() { 
        sellPen();
    },200)

    updateSellRate();
}

function updateSellRate(){
    document.getElementById("penSalesRate").textContent = penSaleRate;
    penSaleRate += 2;
}


function loseGame() {
  document.getElementById("gameStatus").textContent = "Lose";
}