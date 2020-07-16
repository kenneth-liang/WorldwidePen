let pens = 0 
let funds = 0 
let penCost = 0.25 // initial
let materials = 1000
let purchaseMatAmt = 1000
let matCost = 10
let hireCost = 5 
let workForce = 0;
let displaySaleRate = 2;
let manufacturingStatus = 0;

let saleRate = 2

function updateGUI (){
    // increase pens
    document.getElementById("pens").textContent = pens;
    // decrease materials
    document.getElementById("mat").textContent = materials;
    // increase funds by price per pen
    document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    // update pencost 
    document.getElementById("penprice").innerHTML = penCost.toFixed(2);
    // incrase materials cost 
    // debugger
    document.getElementById("matCost").textContent = matCost;
}

function updateSales(){
    //update workforce size
     document.getElementById("workForce").textContent = workForce;
     // update hire price
    document.getElementById("hireCost").innerHTML = hireCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
}

// function updatePenCost(){
//     document.getElementById("penprice").innerHTML = penCost.toFixed(2);
// }

function sellPen(number){
    if (materials <= 0) {
        materials = 0;
        document.getElementById("mat").textContent = 0;
    } else {
        pens += number;
        materials -= number;
        funds += penCost;
        updateGUI();
    }

    // if we cannot afford any materials to continue play
    if (materials === 0 && funds < matCost) {
        loseGame();
    }

}

function lowerPrice(){
    if (penCost >= 0.01) {
        penCost -= .01
        updateGUI();
    }
}

function raisePrice(){
    penCost += .01
    updateGUI();
}

function buyMat(){
    if (matCost > funds) return
    funds -= matCost 
    materials += purchaseMatAmt;
    matCost += 2
    // document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    // document.getElementById("mat").textContent = materials
    // document.getElementById("matCost").textContet = matCost
    // debugger
    updateGUI();
    // debugger
}

function hirePerson(){
    if (hireCost > funds) return 
    workForce++
    funds -= hireCost
    hireCost = 5 + Math.pow(1.1, (workForce + 5)); 
    // document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});

    // document.getElementById("workForce").textContent = workForce;
    // document.getElementById("hireCost").innerHTML = hireCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    updateSales();

    // autoclicker 
    // maybe relocate this
    // change to sellPen(1) but with faster frequency?
    setInterval(function() { 
        sellPen(saleRate);
    }, 1000)

    updateSellRate();
}

function updateSellRate(){
    // debugger
    displaySaleRate = workForce * saleRate;
    document.getElementById("displaySaleRate").textContent = displaySaleRate;
    // penSaleRate = Math.floor(1000 / sellRate);
}


function loseGame() {
  document.getElementById("gameStatus").textContent = "Lose";
}

// need to be enabled by upgrade 
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

function handleUpgrades(){
    for (let i = 0; i < upgrades.length; i++){
        // debugger
        if (upgrades[i].uses > 0 && upgrades[i].setOff()) {
          revealUpgrade(upgrades[i]);
          upgrades[i].uses = upgrades[i].uses - 1;
          activeUpgrades.push(upgrades[i]);
        }
    }

    for (let j = 0; j < activeUpgrades.length;j++){
        if (activeUpgrades[j].cost()){
            document.getElementById(activeUpgrades[j].id).disabled = false;
        } else {
            document.getElementById(activeUpgrades[j].id).disabled = true;
        }
    }
}

function revealUpgrade(upgrade) {
    let element = document.getElementById("upgradeList")
    let newUpgrade = document.createElement("button");
    newUpgrade.setAttribute("id", upgrade.id);

    newUpgrade.onclick = function(){upgrade.effect()};
    newUpgrade.setAttribute("class","upgradeButton");
    element.appendChild(newUpgrade, element.firstChild);

    let span = document.createElement("span");
    span.style.fontWeight = "bold";
    newUpgrade.appendChild(span);

    let title = document.createTextNode(upgrade.title);
    span.appendChild(title)

    let cost = document.createTextNode(upgrade.priceTag);
    newUpgrade.appendChild(cost);

    let div = document.createElement("div");
    newUpgrade.appendChild(div);

    let description = document.createTextNode(upgrade.description);
    newUpgrade.appendChild(description)
}


window.setInterval(function () {
    handleUpgrades();
    if (manufacturingStatus === 1 && materials <= 1){
        buyMat();
    }

    if (pens > 15){
        document.getElementById("salesDiv").style = "visibility: visible";
    }

    if (workForce >= 1){
        document.getElementById("upgradesDiv").style = "visibility: visible";
    }


    

})


