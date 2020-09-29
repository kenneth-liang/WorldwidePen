// Business
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
  if (margin > 0.01) {
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

// Marketing 

function buyAds(){
  if (funds >= adCost) {
    marketingLvl += 1
    funds -= adCost
    adCost = Math.floor(adCost * 2);
    document.getElementById('adCost').innerHTML = adCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('funds').innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('marketingLvl').innerHTML = marketingLvl;
  }
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

    // color mat cost 
    if (matCost <= matBasePrice) {
      document.getElementById("matCost").classList.remove("high-price");
      document.getElementById("matCost").classList.add("low-price")
    } else {
      document.getElementById("matCost").classList.remove("low-price");
      document.getElementById("matCost").classList.add("high-price");
    }

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

// drones 
function deployDrone() {
  if (funds >= droneCost) {
    fleet = fleet + 1;
    funds = funds - droneCost;
    document.getElementById("fleet").innerHTML = fleet;
    document.getElementById("funds").innerHTML = funds.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } );
  }

  droneCost = Math.pow(1.07, fleet) * 100;
  document.getElementById( "droneCost" ).innerHTML = droneCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, });
}


// function updateSellRate(){
//     displaySaleRate = workForce * saleRate;
//     document.getElementById("displaySaleRate").textContent = displaySaleRate;
//     flash("displaySaleRate");
// }


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

// upgrades 
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

// function addPenFeature(description){
//   document.getElementById("penFeatureDescription").innerHTML = description;
//   flash("penFeatureDescription");
//   flash("penprice");
// }



// function animate(){
    // annimates character 
// }


//flash 
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

// messages
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
      }, 800);
    }, 800);
  })
}


// ai 
function revealTargis() {
  targisAwake = true;
  document.getElementById("aiDiv").style = "visibility: visible";
}

function introduceTargis(array){
  let counter = array.length;
  if (counter > 0) {
    setTimeout(function () {
      displayMessage(array[array.length - counter]);
      array.shift();
      introduceTargis(array);
    }, 500);
  }
}

function targisResearch(n){
  targisKnowledge += n
  displayMessage(`Targis Knowledge +${n}`)
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

// Investments 
var stocks = [];
var alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
var portfolioSize = 0;
var stockID = 0;
var secTotal = 0;
var portTotal = 0;
var sellDelay = 0;
var riskiness = 5;
var maxPort = 5;
var m = 0;
var investLevel = 0;
var investUpgradeCost = 100;
var stockGainThreshold = 0.5;
var ledger = 0;
var stockReportCounter = 0;


function investUpgrade() {
  if (funds > investUpgradeCost) {
    funds = funds - investUpgradeCost;
    investLevel++;
    document.getElementById("investmentLevel").innerHTML = investLevel;
    stockGainThreshold = stockGainThreshold + 0.01;
    investUpgradeCost = Math.floor(Math.pow(investLevel + 1, Math.E) * 100);
    document.getElementById( "investUpgradeCost" ).innerHTML = investUpgradeCost.toLocaleString();
    displayMessage( "Investment engine upgraded, expected profit/loss ratio now " + stockGainThreshold );
  }
}

function investDeposit() {
  ledger = ledger - Math.floor(funds);
  bankroll = Math.floor(bankroll + funds);
  funds = 0;
  document.getElementById( "investmentBankroll" ).innerHTML = bankroll.toLocaleString();
  document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
  document.getElementById("portValue").innerHTML = portTotal.toLocaleString();
}

function investWithdraw() {
  ledger = ledger + bankroll;
  funds = funds + bankroll;
  bankroll = 0;
  document.getElementById( "investmentBankroll" ).innerHTML = bankroll.toLocaleString();
  document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
  document.getElementById("portValue").innerHTML = portTotal.toLocaleString();
}

function stockShop(){
    var budget = Math.ceil(portTotal/riskiness);
    var r = 11 - riskiness;
    var reserves = Math.ceil(portTotal/r);
    if (riskiness==1){
        reserves = 0;
    }

    if ((bankroll-budget)<reserves && riskiness == 1 && bankroll >(portTotal/10)){
        budget = bankroll;
        } else if ((bankroll-budget)<reserves && riskiness == 1){
        budget = 0;    
        } else if ((bankroll-budget)<reserves){
        budget = bankroll - reserves;    
        }
    
    if (portfolioSize < maxPort && bankroll >= 5 && budget >= 1 && bankroll - budget >= reserves){
        if (Math.random() < .25){
            
            createStock(budget);

        }
        
    }   
}

function createStock(dollars) {
  stockID++;
  var sym = generateSymbol();
  var roll = Math.random();
  if (roll > 0.99) {
    var pri = Math.ceil(Math.random() * 3000);
  } else if (roll > 0.85) {
    var pri = Math.ceil(Math.random() * 500);
  } else if (roll > 0.6) {
    var pri = Math.ceil(Math.random() * 150);
  } else if (roll > 0.2) {
    var pri = Math.ceil(Math.random() * 50);
  } else {
    var pri = Math.ceil(Math.random() * 15);
  }

  if (pri > dollars) {
    pri = Math.ceil(dollars * roll);
  }

  var amt = Math.floor(dollars / pri);
  if (amt > 1000000) {
    amt = 1000000;
  }

  var newStock = {
    id: stockID,
    symbol: sym,
    price: pri,
    amount: amt,
    total: pri * amt,
    profit: 0,
    age: 0,
  };

  stocks.push(newStock);
  portfolioSize = stocks.length;
  bankroll = bankroll - pri * amt;
  document.getElementById( "investmentBankroll" ).innerHTML = bankroll.toLocaleString();
  document.getElementById("secValue").innerHTML = secTotal.toLocaleString();
  document.getElementById("portValue").innerHTML = portTotal.toLocaleString();
}

function sellStock() {
  bankroll = bankroll + stocks[0].total;
  document.getElementById( "investmentBankroll" ).innerHTML = bankroll.toLocaleString();
  document.getElementById("secValue").innerHTML = secTotal.toLocaleString();
  document.getElementById("portValue").innerHTML = portTotal.toLocaleString();
  stocks.splice(0, 1);
  portfolioSize = stocks.length;
}   

function generateSymbol() {
  var ltrNum = 0;
  var x = Math.random();
  if (x <= 0.01) {
    ltrNum = 1;
  } else if (x <= 0.1) {
    ltrNum = 2;
  } else if (x <= 0.4) {
    ltrNum = 3;
  } else {
    ltrNum = 4;
  }

  var y = Math.floor(Math.random() * 26);
  var name = alphabet[y];

  for (var i = 1; i < ltrNum; i++) {
    var z = Math.floor(Math.random() * 26);
    name = name.concat(alphabet[z]);
  }

  return name;
}

function updateStocks() {
  for (var i = 0; i < portfolioSize; i++) {
    stocks[i].age = stocks[i].age + 1;
    if (Math.random() < 0.6) {
      var gain = true;
      if (Math.random() > stockGainThreshold) {
        gain = false;
      }

      var currentPrice = stocks[i].price;
      var delta = Math.ceil((Math.random() * currentPrice) / (4 * riskiness));

      if (gain) {
        stocks[i].price = stocks[i].price + delta;
      } else {
        stocks[i].price = stocks[i].price - delta;
      }

      if (stocks[i].price == 0 && Math.random() > 0.24) {
        stocks[i].price = 1;
      }

      stocks[i].total = stocks[i].price * stocks[i].amount;

      if (gain) {
        stocks[i].profit = stocks[i].profit + delta * stocks[i].amount;
      } else {
        stocks[i].profit = stocks[i].profit - delta * stocks[i].amount;
      }
    }
  }
}

// Stock List 
window.setInterval(function () {
  if (document.getElementById("investStrat").value == "low") {
    riskiness = 7;
  } else if (document.getElementById("investStrat").value == "med") {
    riskiness = 5;
  } else {
    riskiness = 1;
  }

  m = 0;

  for (var i = 0; i < portfolioSize; i++) {
    m = m + stocks[i].total;
  }

  secTotal = m;

  portTotal = bankroll + secTotal;

  document.getElementById("secValue").innerHTML = secTotal.toLocaleString();
  document.getElementById("portValue").innerHTML = portTotal.toLocaleString();

  portfolioSize = stocks.length;

  for (var i = 1; i <= portfolioSize; i++) {
    var n = i.toString();
    var s = i - 1;
    document.getElementById("stock" + n + "Symbol").innerHTML =
      stocks[s].symbol;
    document.getElementById("stock" + n + "Amount").innerHTML = Math.ceil(
      stocks[s].amount
    );
    document.getElementById("stock" + n + "Price").innerHTML = Math.ceil(
      stocks[s].price
    );
    document.getElementById("stock" + n + "Total").innerHTML = Math.ceil(
      stocks[s].total
    );
    document.getElementById("stock" + n + "Profit").innerHTML = Math.ceil(
      stocks[s].profit
    );
  }

  var firstBlankSlot = portfolioSize + 1;

  for (var i = firstBlankSlot; i <= 5; i++) {
    document.getElementById("stock" + i + "Symbol").innerHTML = "&nbsp";
    document.getElementById("stock" + i + "Amount").innerHTML = "&nbsp";
    document.getElementById("stock" + i + "Price").innerHTML = "&nbsp";
    document.getElementById("stock" + i + "Total").innerHTML = "&nbsp";
    document.getElementById("stock" + i + "Profit").innerHTML = "&nbsp";
  }
}, 100);

window.setInterval(function () {
  if (human == 1) {
    stockShop();
  }
}, 1000);

window.setInterval(function () {
  sellDelay = sellDelay + 1;

  if (
    portfolioSize > 0 &&
    sellDelay >= 5 &&
    Math.random() <= 0.3 &&
    human == 1
  ) {
    sellStock();
    sellDelay = 0;
  }

  if (portfolioSize > 0 && human == 1) {
    updateStocks();
  }
}, 2500);

// revenue
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
  // handle NaN
  if (isNaN(avgRev) || isNaN(avgSales)) {
    document.getElementById("avgRev").innerHTML = "computing...";
    document.getElementById("avgSales").innerHTML = "computing..."
    document.getElementById("avgRev").classList.add("pulsate")
    document.getElementById("avgSales").classList.add("pulsate");
  } else {
    document.getElementById("avgRev").classList.remove("pulsate");
    document.getElementById("avgSales").classList.remove("pulsate");
    document.getElementById("avgSales").innerHTML = Math.round( avgSales ).toLocaleString();
    document.getElementById("avgRev").innerHTML = avgRev.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } );
  }
}



// Main Loop
let mainLoop = window.setInterval(function () {

  if (pens > 0) {
    document.getElementById("gameStatusText").innerHTML = "In Progress"
    document.getElementById("gameStatusText").style = "color: green";
  }

  if (worldOwned === 100) {
    document.getElementById("gameStatusText").innerHTML = "WIN";
    document.getElementById("gameStatusText").style = "color: blue ";
    gameOkay = 0
    displayMessage("Winner Winner!")
    window.clearInterval(mainLoop);
    window.clearInterval(slowLoop);
  }
  // console.log("still going");
  handleUpgrades();
  updateStats();
    
  //auto sell 
  //workforce
  penClick(penBoost*(penmakerlevel/100) * gameOkay)
  //fleet
  penClick(droneBoost * (fleet * 5) * gameOkay);

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
      document.getElementById("upgradesDiv").style = "visibility: visible";
  }


  // demand 
  if (human === 1 ) {
    marketing = Math.pow(1.1, marketingLvl - 1);
    demand = (((.8/margin) * marketing * marketingEffectiveness)*demandBoost);
    demand = demand + ((demand / 10) * popularity);
  }

  //cannot proceed
  // if (materials === 0 && funds < matCost) {
  //     loseGame();    
  // }

  if (targisAwake === true ){
    revealTargis();
  }

  if (materials === 0) {
    document.getElementById("materials").classList.add("pulsate");
  } else {
    document.getElementById("materials").classList.remove("pulsate");
  }

  if (workForce === 0 && funds > hireCost) {
    document.getElementById("hirebtn").classList.add("pulsate")
  } else {
    document.getElementById("hirebtn").classList.remove("pulsate");
  }

  if (funds < droneCost){
    document.getElementById("deploybtn").disabled = true;
  } else {
    document.getElementById("deploybtn").disabled = false;
  }

  if (funds < hireCost) {
    
  } else {
    document.getElementById("hirebtn").disabled = false; 
  }

  if (margin === 0.01) {
    document.getElementById("btnLowPrice").disabled = true;
  } else {
    document.getElementById("btnLowPrice").disabled = false;
  }


  if (funds < matCost) {
    document.getElementById("btnBuyMat").disabled = true;
  } else {
    document.getElementById("btnBuyMat").disabled = false; 
  }

  // if ( Math.round(avgSales) === 0) {
  //   document.getElementById("btnLowPrice").classList.add("pulsate");
  // } else {
  //   document.getElementById("btnLowPrice").classList.remove("pulsate");
  // }

  if (funds > matCost && materials < 1) {
    document.getElementById("btnBuyMat").classList.add("pulsate");
  } else {
    document.getElementById("btnBuyMat").classList.remove("pulsate");
  }

  if (funds < adCost ) {
    document.getElementById("btnMarketing").disabled = true;
  } else {
    document.getElementById("btnMarketing").disabled = false; 
  }

  increaseWorldOwned();

  // console.log("1")

}, 10)




// Save 
var saveTimer = 0;
var secTimer = 0;

if (localStorage.getItem("gameSaved") !== null) {
  //load game if returning user
  loadGame();
  // console.log("loaded");
}



function increaseWorldOwned() {
  if (milestone > 0) {
    worldOwned = (milestone * 5);
    document.getElementById("world-own").innerHTML = worldOwned ;
    if ( worldOwned === 100) {
      document.getElementById("progress").style = `height: 0%`;
    } else {
      let progress = 95 - worldOwned ;
      document.getElementById("progress").style = `height: ${progress}%`;
    }
    // debugger
    // flash("world-own");
  }
}



// slow loop 
let slowLoop = window.setInterval(function(){
  // console.log("still going slow ");

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

  if (pens > 1000000) {// 1 million pens
    milestone = 20;
  } else if (pens > 950000) {
    milestone = 19;
  } else if (pens > 900000) {
    milestone = 18;
  } else if (pens > 850000) {
    milestone = 17;
  } else if (pens > 800000) {
    milestone = 16;
  } else if (pens > 750000) {
    milestone = 15;
  } else if (pens > 700000) {
    milestone = 14;
  } else if (pens > 650000) {
    milestone = 13;
  } else if (pens > 600000) {
    milestone = 12;
  } else if (pens > 550000) {
    milestone = 11;
  } else if (pens > 500000) {
    milestone = 10;
  } else if (pens > 450000) {
    milestone = 9;
  } else if (pens > 400000) {
    milestone = 8;
  } else if (pens > 350000) {
    milestone = 7;
  } else if (pens > 300000) {
    milestone = 6;
  } else if (pens > 250000) {
    milestone = 5;
  } else if (pens > 200000) {
    milestone = 4;
  } else if (pens > 150000) {
    milestone = 3;
  } else if (pens > 100000) {
    milestone = 2;
  } else if (pens > 50000) {
    milestone = 1;
  } 

  // console.log("2")


},100)


