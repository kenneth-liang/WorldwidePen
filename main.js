var pens = 0 
var funds = 0 
var penCost = 0.25 // initial
var materials = 1000
var matCost = 25
var hireCost = 5 
var workForce = 0;
var displaySaleRate = 2;
var manufacturingStatus = 0;

var saleRate = 2

function sellPen(number){

    if (materials <= 0) {
        materials = 0;
        document.getElementById("mat").textContent = 0;
    } else {
        pens += number;
        materials -= number;
        funds += penCost;
        document.getElementById("mat").textContent = materials;
        document.getElementById("pens").textContent = pens;
        document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    }

    // if we cannot afford any materials to continue play
    if (materials === 0 && funds < matCost){
        loseGame();
    }
}

function lowerPrice(){
    if (penCost >= 0.01) {
        penCost -= .01
        document.getElementById("penprice").innerHTML = penCost.toFixed(2);
    }
}

function raisePrice(){
    penCost += .01
    document.getElementById("penprice").innerHTML = penCost.toFixed(2);
}

function buyMat(){
    if (matCost > funds) return
    funds -= matCost 
    materials += 1000
    matCost += 5
    document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    document.getElementById("mat").textContent = materials
    document.getElementById("matCost").textContent = matCost
}

function hirePerson(){
    if (hireCost > funds) return 
    workForce++
    funds -= hireCost
    hireCost = 5 + Math.pow(1.1, (workForce + 5)); 
    document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    document.getElementById("workForce").textContent = workForce;
    document.getElementById("hireCost").innerHTML = hireCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});


    // autoclicker 
    // your employees can sell 2 pens per second 
    // sellRate = 1000 / (500/workForce)// fix
    setInterval(function() { 
        sellPen(saleRate);
    }, 1000)

    updateSellRate();
}

function updateSellRate(){
    document.getElementById("displaySaleRate").textContent = displaySaleRate;
    // penSaleRate = Math.floor(1000 / sellRate);
    displaySaleRate += saleRate;
}


function loseGame() {
  document.getElementById("gameStatus").textContent = "Lose";
}

//need to be enabled by upgrade 
// automatically buys materials when materials are out
function toggleManfacturer(){
    if (manufacturingStatus === 1){
        manufacturingStatus = 0;
        document.getElementById('manuStatus').textContent = "OFF";
    } else {
        manufacturingStatus = 1;
        document.getElementById("manuStatus").textContent = "ON";

    }
}

window.setInterval(function () {
    if (manufacturingStatus === 1 && materials <= 1){
        buyMat();
    }
})


