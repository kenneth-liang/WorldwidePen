let upgrades = [] 
let activeUpgrades = []

let upgrade1 = {
  id: "upgradeButton1",
  title: "Company Satchels ",
  priceTag: "$10.00",
  description: "Increase sales capabilities by 25%",
  message: "Equiping employees with Batagonia Bags ",
  messageAI: "That's awesome! I wish I could wear clothes",
  uses: 1,
  cost: function () { return funds >= 10; }, 
  setOff: function () { return workForce >= 2; },
  effect: function () {
    funds -= 10;
    saleRate = Math.ceil(saleRate * 1.25);
    updateSellRate();
    handleNextMessage(upgrade1);
    // setTimeout(()=> {
    //   displayMessage(upgrade1.message)
    //    setTimeout(() => {
    //      displayMessage(upgrade1.messageAI);
    //    }, 2000);
    // },1000);
    removeUpgradeFromActive(upgrade1, 1);
    //upon clicking it remove it from the list
    // let ele = document.getElementById("upgradeButton1");
    // ele.parentNode.removeChild(ele);
    // let index = activeUpgrades.indexOf(upgrade1);
    // activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade1)

let upgrade2 = {
  id: "upgradeButton2",
  title: "Enable Scooter Technology ",
  priceTag: "$20.00",
  description: "Increase sales capabilities by 50%",
  message: "Sales Mobility Increased, Riding Scooters Unlocked ",
  messageAI: "Now that is good speed, look at them go",
  uses: 1,
  cost: function () {return funds >= 20},
  setOff: function () {return workForce >= 10},
  effect: function () {
    funds -= 20;
    saleRate = Math.ceil(saleRate * 1.5);
    updateSellRate();
    handleNextMessage(upgrade2);
    removeUpgradeFromActive(upgrade2, 2);
  },
};
upgrades.push(upgrade2)

let upgrade3 = {
  id: "upgradeButton3",
  title: "Company Vehicle ",
  priceTag: "$35.00",
  description: "Increase sales capabilities by 75%",
  message: "Company Vechicles Issued",
  messageAI: "Do we have insurance yet?",
  uses: 1,
  cost: function () {return funds >= 35;},
  setOff: function () {return workForce >= 15; },
  effect: function () {
    funds -= 35;
    saleRate = Math.ceil(saleRate * 1.75);
    updateSellRate();
    handleNextMessage(upgrade3);
    removeUpgradeFromActive(upgrade3, 3);
  },
};
upgrades.push(upgrade3)

let upgrade4 = {
  id: "upgradeButton4",
  title: "Research Hyponosis  ",
  priceTag: "$125.00",
  description: "Increase sales capabilities by 100%",
  message: "Sales employees are now trained to hypnotize customers into buying more pens",
  messageAI: "Wait, is this legal?",
  uses: 1,
  cost: function () {return funds >= 125;},
  setOff: function () {return workForce >= 20;},
  effect: function () {
    funds -= 100;
    saleRate = Math.ceil(saleRate * 2.00);
    updateSellRate();
    handleNextMessage(upgrade4);
    removeUpgradeFromActive(upgrade4, 4);
  },
};
upgrades.push(upgrade4)


let upgrade5 = {
  id: "upgradeButton5",
  title: "Targis Resarch 1 ",
  priceTag: "$10.00",
  description: "Automatically repurchase materials",
  message: "Toggle to enable automatic materials purchasing",
  messageAI: "I can handle buying the materials :)",
  uses: 1,
  cost: function () { return funds >= 10; },
  setOff: function () { return materials <= 750; },
  effect: function () {
    funds -= 20;
    document.getElementById("autoBuy").style = "visibility: visible";
    handleNextMessage(upgrade5);
    targisResearch(2);
    removeUpgradeFromActive(upgrade5, 5);
  },
};
upgrades.push(upgrade5);

let upgrade6 = {
  id: "upgradeButton6",
  title: "Targis Resarch 2 ",
  priceTag: "$20.00",
  description: "Increase Materials Purchased by 50%",
  message: "Gain more materials at each purchase",
  messageAI: "Just read Bargaining for Dummies in 0.0000001 seconds",
  uses: 1,
  cost: function () { return funds >= 20; },
  setOff: function () { return pens >= 1000; },
  effect: function () {
    funds -= 25;
    purchaseMatAmt *= 1.50;
    handleNextMessage(upgrade6);
    targisResearch(3);
    removeUpgradeFromActive(upgrade6, 6);
  },
};
upgrades.push(upgrade6);

let upgrade7 = {
  id: "upgradeButton7",
  title: "Purchase Factory ",
  priceTag: "$200.00",
  description: "Increase Materials Purchased by 180%",
  message: "All materials produced in house factory",
  messageAI: "The locals are happy you employed them. You are a good human",
  uses: 1,
  cost: function () { return funds >= 200; },
  setOff: function () { return pens >= 1000; },
  effect: function () {
    funds -= 200;
    purchaseMatAmt *= 1.80;
    handleNextMessage(upgrade7);
    removeUpgradeFromActive(upgrade7, 7);

  },
};
upgrades.push(upgrade7);

let upgrade10 = {
  id: "upgradeButton10",
  title: "Outsource ",
  priceTag: "$1,000.00",
  description: "Increase Materials Purchased by 500% and Decrease cost by 50%",
  message: "All factories relocated overseas",
  messageAI: "Folks don't seem that happy about this",
  uses: 1,
  cost: function () { return funds >= 1000; }, 
  setOff: function () { return pens >= 15000; },
  effect: function () {
    funds -= 1000;
    matCost *= 0.5;
    purchaseMatAmt *= 5.0;
    handleNextMessage(upgrade10);
    removeUpgradeFromActive(upgrade10, 10);
  },
};
upgrades.push(upgrade10);

let upgrade15 = {
  id: "upgradeButton15",
  title: "Research Artificial Inteligence ",
  priceTag: "$5.00",
  description: "If you dare",
  uses: 1,
  cost: function () { return funds >= 5; }, 
  setOff: function () { return workForce >= 1; },
  effect: function () {
    funds -= 5;
    clearMessages();
    revealTargis();
    flash("targisChat");
    introduceTargis(); 
    removeUpgradeFromActive(upgrade15, 15);
  },
};
upgrades.push(upgrade15);


let upgrade16 = {
  id: "upgradeButton16",
  title: "Enhance Targis ",
  priceTag: "$250.00",
  description: "Targis learns a new skill ",
  message: "what is it?",
  messageAI: "Beep...Boop... I know statistics",
  uses: 1,
  cost: function () { return funds >= 250; },
  setOff: function () { return targisKnowledge >= 5 },
  effect: function () {
    funds -= 250;
    targisResearch(10);
    handleNextMessage(upgrade16);
    removeUpgradeFromActive(upgrade16, 16);

  },
};
upgrades.push(upgrade16);




//more upgrades ALOT 




