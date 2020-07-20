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
      penCost: penCost,
      materials: materials,
      purchaseMatAmt: purchaseMatAmt,
      saleRate: saleRate,
      matCost: matCost,
      hireCost: hireCost,
      workForce: workForce,
      displaySaleRate: displaySaleRate,
      manufacturingStatus: manufacturingStatus,
      blinkRate: blinkRate,
      saleRate: saleRate,
      targisKnowledge: targisKnowledge,
      targisAwake: targisAwake,
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
    document.getElementById("penprice").innerHTML = penCost.toFixed(2);
    document.getElementById("mat").textContent = materials;
    document.getElementById("matCost").textContent = matCost;
    document.getElementById("displaySaleRate").textContent = displaySaleRate;
    document.getElementById("workForce").textContent = workForce;
    document.getElementById("hireCost").innerHTML = hireCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    document.getElementById("funds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2});
    document.getElementById("displaySaleRate").textContent = displaySaleRate;
    document.getElementById("targisAwareness").innerHTML = targisKnowledge;
    document.getElementById("salesDiv").style = "visibility: visible";
    document.getElementById("autoBuy").style = "visibility: visible";
    document.getElementById("businessDiv").style = "visibility: visible";
    document.getElementById("productionDiv").style = "visibility: visible";
    flash("targisChat");
    flash("targisHeader");
    displayMessage("Game Loaded")
    displayMessage("Welcome Back!")
    autoClick();
}

function loadGame(){
    let game = JSON.parse(localStorage.getItem("gameSaved"));
    let loadUpgradeUses = JSON.parse(localStorage.getItem("savedUpgradesUses"));
    let loadUpgradesActive = JSON.parse(localStorage.getItem("savedUpgradesActive"));
    pens = game.pens
    funds = game.funds
    penCost = game.penCost
    materials = game.materials
    purchaseMatAmt = game.purchaseMatAmt
    matCost = game.matCost
    hireCost = game.hireCost
    workForce = game.workForce
    displaySaleRate = game.displaySaleRate
    manufacturingStatus = game.manufacturingStatus
    blinkRate = game.blinkRate
    saleRate = game.saleRate
    targisKnowledge = game.targisKnowledge
    targisAwake = game.targisAwake

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