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
let blinkRate = 0;
let saleRate = 2
let targisKnowledge = 5

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
    document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
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
}


//need a reason/purpose for adjusting the price
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
    updateGUI();
}

function hirePerson(){
    if (hireCost > funds) return 
    workForce++
    funds -= hireCost
    hireCost = 5 + Math.pow(1.1, (workForce + 5)); 
  
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
    displaySaleRate = workForce * saleRate;
    document.getElementById("displaySaleRate").textContent = displaySaleRate;
}


function loseGame() {
  document.getElementById("gameStatus").textContent = "Lose";
  clearMessages();
  setTimeout(()=>{
      displayMessage("I have failed you...")
       setTimeout(() => {
         displayMessage("Targis shutting down...");
         setTimeout(() => {
           displayMessage("Goodbye");
           setTimeout(() => {
             displayMessage("...");
             setTimeout(() => {
               displayMessage("Game Over");
             }, 2000);
           }, 2000);
         }, 2000);
       }, 2000);
  },2000)
  console.log("over")
  clearInterval(gameStart);
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
        if (upgrades[i].uses !== 0 && upgrades[i].setOff()) {
          revealUpgrade(upgrades[i]);
          upgrades[i].uses -= 1;
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

    flash(upgrade.id)
}


function researchAI(){
    animate();
    document.getElementById("aiDiv").style = "visibility: visible";
}

function animate(){

}

function flash(id) {
  var upgrade = document.getElementById(id);

  {
    var handle = setInterval(function () {
      toggleVisibility(id);
    }, 30);
  }

  function toggleVisibility(id) {
    blinkRate = blinkRate + 1;

    if (blinkRate >= 12) {
      clearInterval(handle);
      blinkRate = 0;
      upgrade.style.visibility = "visible";
    } else {
      if (upgrade.style.visibility != "hidden") {
        upgrade.style.visibility = "hidden";
      } else {
        upgrade.style.visibility = "visible";
      }
    }
  }
}


// can we loop here?
function displayMessage(message){
    document.getElementById("message7").innerHTML=document.getElementById("message6").innerHTML;
    document.getElementById("message6").innerHTML=document.getElementById("message5").innerHTML;
    document.getElementById("message5").innerHTML=document.getElementById("message4").innerHTML;
    document.getElementById("message4").innerHTML=document.getElementById("message3").innerHTML;
    document.getElementById("message3").innerHTML=document.getElementById("message2").innerHTML;
    document.getElementById("message2").innerHTML=document.getElementById("message1").innerHTML;
    document.getElementById("message1").innerHTML = message;
}

function clearMessages(){
    document.getElementById("message7").innerHTML="";
    document.getElementById("message6").innerHTML="";
    document.getElementById("message5").innerHTML="";
    document.getElementById("message4").innerHTML="";
    document.getElementById("message3").innerHTML="";
    document.getElementById("message2").innerHTML="";
    document.getElementById("message1").innerHTML=""
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}



let gameStart = setInterval(function () {
    handleUpgrades();

    
    if (manufacturingStatus === 1 && materials <= 1){
        buyMat();
    }

    //unfolding
    if (pens > 15){
        document.getElementById("salesDiv").style = "visibility: visible";
    }

    if (workForce >= 1){
        document.getElementById("upgradesDiv").style = "visibility: visible";
    }

    // if (hireCost + matCost < funds){
    //     displayMessage("Lets hire some more workers!");
    // }

    

    //cannot proceed
    if (materials === 0 && funds < matCost) {
        loseGame();    
    }
})


