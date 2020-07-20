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
    flash("displaySaleRate");
    flash("workForce");
    flash("hireCost");
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
    displayMessage(`${purchaseMatAmt} Materials Purchased`);
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
    // setInterval(function() { 
    //     sellPen(displaySaleRate);
    // }, 1000)
    autoClick();

    updateSellRate();
}

function autoClick(){
    setInterval(function () {
      sellPen(displaySaleRate);
    }, 1000);
}

function updateSellRate(){
    displaySaleRate = workForce * saleRate;
    document.getElementById("displaySaleRate").textContent = displaySaleRate;
    flash("displaySaleRate");

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
               document.getElementById("restartGame").style =
                 "visibility: visible";
             }, 1000);
           }, 1000);
         }, 1000);
       }, 1000);
  },1000)

  console.log("over")
  clearInterval(gameStart);
}

// need to be enabled by upgrade 
// automatically buys materials when materials are out
function toggleAutoBuy(){
    if (manufacturingStatus === 1){
      manufacturingStatus = 0;
      document.getElementById('buyStatus').textContent = "OFF";
      displayMessage("AutoBuy Inactive");
    } else {
      manufacturingStatus = 1;
      document.getElementById("buyStatus").textContent = "ON";
      displayMessage("AutoBuy Active");
    } 
}

function handleUpgrades(){
    for (let i = 0; i < upgrades.length; i++){
        // debugger
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
    // animate();
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

// can we loop here? yes we can
function displayMessage(message){
    // document.getElementById("message8").innerHTML=document.getElementById("message7").innerHTML;
    // document.getElementById("message7").innerHTML=document.getElementById("message6").innerHTML;
    // document.getElementById("message6").innerHTML=document.getElementById("message5").innerHTML;
    // document.getElementById("message5").innerHTML=document.getElementById("message4").innerHTML;
    // document.getElementById("message4").innerHTML=document.getElementById("message3").innerHTML;
    // document.getElementById("message3").innerHTML=document.getElementById("message2").innerHTML;
    // document.getElementById("message2").innerHTML=document.getElementById("message1").innerHTML;
    // document.getElementById("message1").innerHTML = message;

    for (let i = 8; i > 0; i--){
      if (i === 1){
        document.getElementById("message1").innerHTML = message;
      } else {
        let prevMessage = `message${i-1}`
        document.getElementById(`message${i}`).innerHTML = document.getElementById(prevMessage).innerHTML;
      }
    }
}

// yes we can also loop here too
function clearMessages(){
    for (let i = 1; i <= 8; i++){
      document.getElementById(`message${i}`).innerHTML = "";
    }
}

function handleNextMessage(upgrade){
  setTimeout(()=>{
    displayMessage("...")
    setTimeout(() => {
      displayMessage(upgrade.message);
      setTimeout(() => {
        displayMessage(upgrade.messageAI);
      }, 1000);
    }, 1000);
  })
}

//i do not like this code here
function introduceTargis(){
  setTimeout(() => {
    displayMessage("Artificial Intelligence research beginning");
    setTimeout(() => {
      displayMessage("...");
      setTimeout(() => {
        displayMessage("beep");
        setTimeout(() => {
          displayMessage("...");
          setTimeout(() => {
            displayMessage("boop");
            setTimeout(() => {
              displayMessage("...");
              setTimeout(() => {
                displayMessage(
                  "Hello, I am Targis your 'friendly' assistant"
                );
                flash("targisHeader");
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
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

var saveTimer = 0;


if (localStorage.getItem("gameSaved") !== null) {
  loadGame();
  console.log("loaded")
}

let gameStart = setInterval(function () {
    handleUpgrades();

    
    if (manufacturingStatus === 1 && materials <= 1){
        buyMat();
    }

    if (pens > 1){
      document.getElementById("businessDiv").style = "visibility: visible";
      document.getElementById("productionDiv").style = "visibility: visible";
    }

    //unfolding
    if (pens > 15){
        document.getElementById("salesDiv").style = "visibility: visible";
        document.getElementById("salesDiv").style = "visibility: visible";
    }

    if (workForce >= 1){
        document.getElementById("upgradesDiv").style = "visibility: visible";
    }

    //targis assist
    // if (materials === 0 && funds >= matCost ) {
    //   displayMessage("You should buy more materials")
    // }

    // if (hireCost + matCost < funds){
    //     displayMessage("Lets hire some more workers!");
    // }

  
    //cannot proceed
    if (materials === 0 && funds < matCost) {
        loseGame();    
    }

    if (targisAwake === true ){
      revealTargis();
    }

    saveTimer++;
    if (saveTimer >= 500){
      saveGame();
      saveTimer = 0;
    }
}, 100)


