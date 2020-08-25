function penClick(number){
  if (materials >= 1) {
    if (number > materials){
      number = materials 
    }
    pens += number 
    unsoldPens += number
    materials -= number 
    // unusedPens += number 

    document.getElementById("pens").innerHTML = Math.ceil(pens).toLocaleString();
    document.getElementById("materials").innerHTML = Math.floor(materials).toLocaleString();
    document.getElementById("unsoldPens").innerHTML = Math.floor(unsoldPens).toLocaleString();
  }
}



function sellPens(number){
  if (unsoldPens > 0){
    if (number > unsoldPens){
      transaction = Math.floor((unsoldPens * margin)*1000)/1000;   
      funds = Math.floor((funds + transaction) * 100)/100;
      income += transaction;
      pensSold += unsoldPens
      unsoldPens = 0
    } else {
      transaction = Math.floor(number * margin * 1000) / 1000;
      funds = Math.floor((funds + transaction) * 100) / 100;
      income += transaction
      pensSold += number
      unsoldPens -= number
    }
  }
}

function lowerPrice(){
    if (margin > 0.02) {
      margin = Math.round((margin - 0.01) * 100) / 100;
      document.getElementById("demand").innerHTML = demand.toFixed(2);
      document.getElementById("margin").innerHTML = margin.toFixed(2);
    }
}
function raisePrice(){
    margin = Math.round((margin + 0.01) * 100) / 100;  
    document.getElementById("demand").innerHTML = demand.toFixed(2);
    document.getElementById("margin").innerHTML = margin.toFixed(2);  
}

// Materials
function adjustMatPrice(){
  matPriceTimer++;
  if (matPriceTimer > 250 && matBasePrice>15) {
    matBasePrice = matBasePrice - (matBasePrice/1000);
    matPriceTimer = 0;
  }

  if (Math.random() < 0.015) {
    matPriceCounter++
    let matAdjust = 6 * (Math.sin(matPriceCounter))
    matCost = Math.ceil(matBasePrice + matAdjust);
    document.getElementById("matCost").innerHTML = matCost;
  }
}

function buyMat(){
    if (funds >= matCost) {
      matPriceTimer = 0;
      materials = materials + matSupply
      funds = funds - matCost; 
      matPurchase = matPurchase + 1; 
      matBasePrice = matBasePrice + 0.05;
      document.getElementById('materials').innerHTML = Math.floor(materials).toLocaleString();
      document.getElementById('funds').innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
}

function toggleAutoBuy() {
  if (manufacturingStatus === 1) {
    manufacturingStatus = 0;
    document.getElementById("buyStatus").textContent = "OFF";
    displayMessage("AutoBuy Inactive");
  } else {
    manufacturingStatus = 1;
    document.getElementById("buyStatus").textContent = "ON";
    displayMessage("AutoBuy Active");
  }
}

//Sales
function hirePerson(){

  if (funds >= hireCost) {
    penmakerlevel += 1
    funds -= hireCost;
    workForce++;
    document.getElementById('workForce').innerHTML = penmakerlevel
  }

  hireCost = Math.pow(1.1, penmakerlevel)+5;
  document.getElementById('hireCost').innerHTML = hireCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
}


function updateSellRate(){
    displaySaleRate = workForce * saleRate;
    document.getElementById("displaySaleRate").textContent = displaySaleRate;
    flash("displaySaleRate");

}


// function loseGame() {
//   document.getElementById("gameStatusText").textContent = "Lose";
//   document.getElementById("restart-btn").innerHTML = "Try Again?";
//   document.getElementById("gameStatusText").style = "color: red";
//   document.getElementById("upgradeList").style = "visibility: hidden";
//   clearMessages();
  

//   setTimeout(()=>{
//       displayMessage("I have failed you")
//        setTimeout(() => {
//          displayMessage("Targis shutting down");
//          setTimeout(() => {
//            displayMessage("Goodbye");
//            setTimeout(() => {
//              setTimeout(() => {
//                displayMessage("Game Over");
//              }, 1000);
//            }, 1000);
//          }, 1000);
//        }, 1000);
//   },1000)


//   console.log("over")
//   clearInterval(gameStart);
// }


function handleUpgrades(){
    for (let i = 0; i < upgrades.length; i++){
        if (upgrades[i].uses !== 0 && upgrades[i].trigger()) {
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

function addPenFeature(description){
  document.getElementById("penFeatureDescription").innerHTML = description;
  flash("penFeatureDescription");
  flash("penprice");
}


function revealTargis(){
    targisAwake = true;
    document.getElementById("aiDiv").style = "visibility: visible";
}

// function animate(){
    // annimates character 
// }

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

function displayMessage(message){
    for (let i = 7; i > 0; i--){
      if (i === 1){
        document.getElementById("message1").innerHTML = message;
      } else {
        let prevMessage = `message${i-1}`
        document.getElementById(`message${i}`).innerHTML = document.getElementById(prevMessage).innerHTML;
      }
    }
}

function clearMessages(){
    for (let i = 1; i <= 7; i++){
      document.getElementById(`message${i}`).innerHTML = "";
    }
}

function handleNextMessage(upgrade){
  setTimeout(()=>{
    displayMessage(upgrade.title)
    setTimeout(() => {
      displayMessage(upgrade.message);
      setTimeout(() => {
        displayMessage(upgrade.messageAI);
      }, 1000);
    }, 1000);
  })
}

function introduceTargis(array){
  let counter = array.length;
  if (counter > 0) {
    setTimeout(function () {
      displayMessage(array[array.length - counter]);
      array.shift();
      introduceTargis(array);
    }, 1000);
  }
}

function targisResearch(n){
  targisKnowledge += n
  document.getElementById("targisAwareness").innerHTML = targisKnowledge
  flash("targisConscious");
}

function removeUpgradeFromActive(upgrade, id){
  let ele = document.getElementById(`upgradeButton${id}`);
  ele.parentNode.removeChild(ele);
  let index = activeUpgrades.indexOf(upgrade);
  activeUpgrades.splice(index, 1);
}


// Statistics

function updateStats(){
  document.getElementById("pens").innerHTML = Math.ceil(pens).toLocaleString();
  document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
  document.getElementById("unsoldPens").innerHTML = Math.floor(unsoldPens).toLocaleString();
  document.getElementById("demand").textContent = (demand*10).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});;
  document.getElementById("materials").innerHTML = Math.floor( materials ).toLocaleString();
  document.getElementById("matCost").textContent = matCost;
  // document.getElementById("displaySaleRate").innerHTML = saleRate.toLocaleString();

}

var incomeThen;
var incomeNow;
var trueAvgRev;
var revTimer = 0;
var avgSales;
var incomeLastSecond;
var sum;

function calculateRev() {
  incomeThen = incomeNow;
  incomeNow = income;
  incomeLastSecond = Math.round((incomeNow - incomeThen) * 100) / 100;

  incomeTracker.push(incomeLastSecond);

  if (incomeTracker.length > 10) {
    incomeTracker.splice(0, 1);
  }

  sum = 0;

  for (i = 0; i < incomeTracker.length; i++) {
    sum = Math.round((sum + incomeTracker[i]) * 100) / 100;
    //        console.log("sum = "+sum);
  }

  trueAvgRev = sum / incomeTracker.length;

  var chanceOfPurchase = demand / 100;
  if (chanceOfPurchase > 1) {
    chanceOfPurchase = 1;
  }
  if (unsoldPens < 1) {
    chanceOfPurchase = 0;
  }

  avgSales = chanceOfPurchase * (0.7 * Math.pow(demand, 1.15)) * 10;
  avgRev = chanceOfPurchase * (0.7 * Math.pow(demand, 1.15)) * margin * 10;

  if (demand > unsoldPens) {
    avgRev = trueAvgRev;
    avgSales = avgRev / margin;
  }

  document.getElementById("avgSales").innerHTML = Math.round(
    avgSales
  ).toLocaleString();

  document.getElementById("avgRev").innerHTML = avgRev.toLocaleString(
    undefined,
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );
}


// Main
window.setInterval(function () {
    handleUpgrades();
    updateStats();
    
    if (manufacturingStatus === 1 && materials <= 1){
        buyMat();
    }

    if (pens >= 1){
      document.getElementById("businessDiv").style = "visibility: visible";
      document.getElementById("productionDiv").style = "visibility: visible";
    }

    //unfolding
    if (pens >= 4){
        // document.getElementById("salesDiv").style = "visibility: visible";
        // document.getElementById("statsDiv").style = "visibility: visible";
    }

    if (pens >= 1){
        document.getElementById("salesDiv").style = "visibility: visible";
        document.getElementById("upgradesDiv").style = "visibility: visible";
    }

    //targis assist
    // if (materials === 0 && funds >= matCost ) {
    //   displayMessage("You should buy more materials")
    // }

    // if (hireCost + matCost < funds){
    //     displayMessage("Lets hire some more workers!");
    // }

    // sale rate 
    saleRateTracker++;
    if (saleRateTracker<100){
      let cr = pens - prevPens;
      saleRateTemp += cr;
      prevPens = pens
    } else {
      saleRateTracker = 0
      saleRate = saleRateTemp
      saleRateTemp = 0
    }
  
    //auto sell 
    penClick(penBoost*(penmakerlevel/100))

    // demand 
    if (human === 1 ) {
      marketing = Math.pow(1.1, marketingLvl - 1);
      demand = (((.8/margin) * marketing * marketingEffectiveness)*demandBoost);
      demand = demand + (demand / 10) * prestigeU;
    }

    //cannot proceed
    // if (materials === 0 && funds < matCost) {
    //     loseGame();    
    // }

    if (targisAwake === true ){
      revealTargis();
    }

   
}, 10)







// Save 
var saveTimer = 0;
var secTimer = 0;

if (localStorage.getItem("gameSaved") !== null) {
  loadGame();
  console.log("loaded");
}

// slow 

window.setInterval(function(){
  // price fluct
  adjustMatPrice();


  //sales calc 

  if (human === 1) {
    if (Math.random() < demand/100){
      sellPens(Math.floor(.7 * Math.pow(demand,1.15)))
    }

    secTimer++;
      if (secTimer >=10){
        calculateRev();
        secTimer = 0
      }
  }
  
  // auto save
  saveTimer++;
  if (saveTimer >= 500) {
    saveGame();
    saveTimer = 0;
  }


},100)
