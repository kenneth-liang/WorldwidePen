function saveGame(){
    let savedUpgradesUses = [];
    let savedUpgradesActive = [];
    for ( let i = 0; i < upgrades.length; i++){
        savedUpgradesUses[i] = upgrades[i].uses;
    }
    for ( let i = 0; i < activeUpgrades.length; i++){
        savedUpgradesActive[i] = activeUpgrades[i].id;
    }

    let gameSaved = {
      pens: pens,
      funds: funds,
      materials: materials,
      matSupply: matSupply,
      matPurchase: matPurchase,
      purchaseMatAmt: purchaseMatAmt,
      matCost: matCost,
      hireCost: hireCost,
      workForce: workForce,
      saleRate: saleRate,
      displaySaleRate: displaySaleRate,
      saleRateTracker: saleRateTracker,
      saleRateTemp: saleRateTemp,
      prevPens: prevPens,
      manufacturingStatus: manufacturingStatus,
      blinkRate: blinkRate,
      targisKnowledge: targisKnowledge,
      targisAwake: targisAwake,
      targis: targis,
      matPriceTimer: matPriceTimer,
      matBasePrice: matBasePrice,
      matPriceCounter: matPriceCounter,
      unsoldPens: unsoldPens,
      transaction: transaction,
      human: human,
      demand: demand,
      demandBoost: demandBoost,
      income: income,
      incomeTracker: incomeTracker,
      margin: margin,
      pensSold: pensSold,
      penBoost: penBoost,
      penmakerlevel: penmakerlevel,
      marketing: marketing,
      marketingLvl: marketingLvl,
      marketingEffectiveness: marketingEffectiveness,
      popularity: popularity,
      autoBuy: autoBuy,
      droneFlag: droneFlag,
      droneCost: droneCost,
      fleet: fleet,
      droneBoost: droneBoost,
      statisticsFlag: statisticsFlag,
      adCost: adCost,
      globeFlag: globeFlag,
      worldOwned: worldOwned,
      milestone: milestone,
      marketingFlag: marketingFlag,
      gameOkay: gameOkay,
      investmentEngineFlag: investmentEngineFlag,
      bankroll: bankroll,
    };
    

    localStorage.setItem("gameSaved", JSON.stringify(gameSaved));
    localStorage.setItem("savedUpgradesUses", JSON.stringify(savedUpgradesUses));
    localStorage.setItem("savedUpgradesActive", JSON.stringify(savedUpgradesActive));
    // console.log("hi, game saved")
    displayMessage("Game Saved!");
}


function refresh() {
    document.getElementById("pens").textContent = pens;
    document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    document.getElementById("margin").innerHTML = margin.toFixed(2);
    document.getElementById("materials").textContent = materials;
    document.getElementById("matCost").textContent = matCost;
    document.getElementById("matSupply").textContent = matSupply;
    // document.getElementById("displaySaleRate").textContent = displaySaleRate;
    document.getElementById("workForce").textContent = workForce;
    document.getElementById("hireCost").innerHTML = hireCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    // document.getElementById("displaySaleRate").textContent = displaySaleRate;
    document.getElementById("targisAwareness").innerHTML = targisKnowledge;
    document.getElementById("fleet").innerHTML = fleet;
    document.getElementById("marketingLvl").innerHTML = marketingLvl;
    document.getElementById("adCost").innerHTML = adCost;
    document.getElementById( "droneCost" ).innerHTML = droneCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, });
    document.getElementById('investmentBankroll').innerHTML = bankroll.toLocaleString();
    document.getElementById('secValue').innerHTML = secTotal.toLocaleString();
    document.getElementById('portValue').innerHTML = portTotal.toLocaleString();
    document.getElementById("investUpgradeCost").innerHTML=investUpgradeCost.toLocaleString();

    document.getElementById("businessDiv").style = "visibility: visible";
    document.getElementById("productionDiv").style = "visibility: visible";
    document.getElementById("salesDiv").style = "visibility: visible";
    if (autoBuy === 1) {
        document.getElementById("autoBuy").style = "visibility: visible";
    }

    if (statisticsFlag === 1) {
        document.getElementById("statsDiv").style = "visibility: visible";
    }

    if (globeFlag === 1) {
        document.getElementById("globeDiv").style = "visibility: visible";
    }
    if (droneFlag === 1){
        document.getElementById("droneDiv").style = "visibility: visible";
    }

    if (marketingFlag === 1) {
        document.getElementById("marketingDiv").style = "visibility: visible";
    }
    console.log(investmentEngineFlag)
    if (investmentEngineFlag === 1) {
        document.getElementById("investmentsDiv").style = "visibility: visible";

    }

    
    flash("targisChat");
    flash("targisHeader");
    displayMessage("Game Loaded")
    displayMessage("Welcome Back!")
    displayMessage("Computing Statistics")
}

function loadGame(){
    let game = JSON.parse(localStorage.getItem("gameSaved"));
    let loadUpgradeUses = JSON.parse(localStorage.getItem("savedUpgradesUses"));
    let loadUpgradesActive = JSON.parse(localStorage.getItem("savedUpgradesActive"));
    pens = game.pens;
    funds = game.funds;
    materials = game.materials;
    matSupply = game.matSupply;
    matPurchase = game.matPurchase;
    purchaseMatAmt = game.purchaseMatAmt;
    matCost = game.matCost;
    hireCost = game.hireCost;
    workForce = game.workForce;
    saleRate = game.saleRate;
    displaySaleRate = game.displaySaleRate;
    saleRateTracker = game.saleRateTracker;
    saleRateTemp = game.saleRateTemp;
    prevPens = game.prevPens;
    manufacturingStatus = game.manufacturingStatus;
    blinkRate = game.blinkRate;
    targisKnowledge = game.targisKnowledge;
    targisAwake = game.targisAwake;
    targis = game.targis;
    matPriceTimer = game.matPriceTimer;
    matBasePrice = game.matBasePrice;
    matPriceCounter = game.matPriceCounter;
    unsoldPens = game.unsoldPens;
    transaction = game.transaction;
    human = game.human;
    demand = game.demand;
    demandBoost = game.demandBoost;
    income = game.income;
    incomeTracker = game.incomeTracker;
    margin = game.margin;
    pensSold = game.pensSold;
    penBoost = game.penBoost;
    penmakerlevel = game.penmakerlevel;
    marketing = game.marketing;
    marketingLvl = game.marketingLvl;
    marketingEffectiveness = game.marketingEffectiveness;
    popularity = game.popularity;
    autoBuy = game.autoBuy;
    droneFlag = game.droneFlag;
    droneCost = game.droneCost;
    fleet = game.fleet;
    droneBoost = game.droneBoost;
    statisticsFlag = game.statisticsFlag;
    adCost = game.adCost;
    globeFlag = game.globeFlag;
    worldOwned = game.worldOwned;
    milestone = game.milestone;
    marketingFlag = game.marketingFlag;
    gameOkay= game.gameOkay
    investmentEngineFlag= game.investmentEngineFlag
    bankroll= game.bankroll

    for (let i = 0; i < upgrades.length; i++){
        upgrades[i].uses = loadUpgradeUses[i];
    }

    for (let i = 0; i < upgrades.length;i++){
        if (loadUpgradesActive.indexOf(upgrades[i].id)>=0){
            revealUpgrade(upgrades[i]);
            activeUpgrades.push(upgrades[i]);
        }
    }
    refresh();
}


function reset(){
    localStorage.removeItem("gameSaved")
    localStorage.removeItem("savedUpgradesUses");
    localStorage.removeItem("savedUpgradesActive");
    location.reload();
}