let upgrades = [] 
let activeUpgrades = []

let upgrade1 = {
  id: "upgradeButton1",
  title: "Company Satchels ",
  priceTag: "$10.00",
  description: "Increase sales by 25%",
  message: "Equiping employees with Batagonia Bags ",
  messageAI: "That's awesome! I wish I could wear clothes",
  uses: 1,
  cost: function () { return funds >= 10; }, 
  trigger: function () { return workForce >= 2; },
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
  trigger: function () {return workForce >= 10},
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
  trigger: function () {return workForce >= 15; },
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
  trigger: function () {return workForce >= 20;},
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
  trigger: function () { return materials <= 750; },
  effect: function () {
    funds -= 10;
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
  trigger: function () { return pens >= 1000; },
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
  trigger: function () { return pens >= 1000; },
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
  trigger: function () { return pens >= 15000; },
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
  trigger: function () { return workForce >= 1; },
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
  trigger: function () { return targisKnowledge >= 5 },
  effect: function () {
    funds -= 250;
    targisResearch(10);
    handleNextMessage(upgrade16);
    removeUpgradeFromActive(upgrade16, 16);

  },
};
upgrades.push(upgrade16);

let upgrade20 = {
  id: "upgradeButton20",
  title: "Upgrade Pen Feature ",
  priceTag: "$25.00",
  description: "Multi Colored",
  message: "Selling at $0.35 per pen",
  messageAI: "This pen looks much better",
  uses: 1,
  cost: function () { return funds >= 25; },
  trigger: function () { return pens >= 500; },
  effect: function () {
    funds -= 25;
    penCost += 0.10
    addPenFeature(upgrade20.description);
    handleNextMessage(upgrade20);
    removeUpgradeFromActive(upgrade20, 20);
  },
};

upgrades.push(upgrade20);

let upgrade21 = {
  id: "upgradeButton21",
  title: "Upgrade Pen Feature ",
  priceTag: "$250.00",
  description: "Soft Comfort Grip",
  message: "Selling at $0.45 per pen",
  messageAI: "If only I had hands, I could hold this pen.",
  uses: 1,
  cost: function () { return funds >= 250; },
  trigger: function () { return pens >= 5000; },
  effect: function () {
    funds -= 250;
    penCost += 0.10
    addPenFeature(upgrade21.description);
    handleNextMessage(upgrade21);
    removeUpgradeFromActive(upgrade21, 21);
  },
};
upgrades.push(upgrade21);

let upgrade22 = {
  id: "upgradeButton22",
  title: "Upgrade Pen Feature ",
  priceTag: "$750.00",
  description: "Laser Pointer Mount",
  message: "Selling at $0.75 per pen",
  messageAI: "Careful around these eyes",
  uses: 1,
  cost: function () { return funds >= 750; },
  trigger: function () { return pens >= 5000; },
  effect: function () {
    funds -= 750;
    penCost += 0.30;
    addPenFeature(upgrade22.description);
    handleNextMessage(upgrade22);
    removeUpgradeFromActive(upgrade22, 22);
  },
};
upgrades.push(upgrade22);

let upgrade23 = {
  id: "upgradeButton23",
  title: "Upgrade Pen Feature ",
  priceTag: "$1000.00",
  description: "Solar Panel",
  message: "Selling at $0.85 per pen",
  messageAI: "Unlimited power!!",
  uses: 1,
  cost: function () { return funds >= 1000; },
  trigger: function () { return pens >= 7000; },
  effect: function () {
    funds -= 1000;
    penCost += 0.10;
    addPenFeature(upgrade23.description);
    handleNextMessage(upgrade23);
    removeUpgradeFromActive(upgrade23, 23);
  },
};
upgrades.push(upgrade23);

let upgrade24 = {
  id: "upgradeButton24",
  title: "Upgrade Pen Feature ",
  priceTag: "$3000.00",
  description: "Dark Matter Ink",
  message: "Selling at $1.00 per pen",
  messageAI: "Unable to compute Dark Matter",
  uses: 1,
  cost: function () {
    return funds >= 3000;
  },
  trigger: function () {
    return pens >= 9000;
  },
  effect: function () {
    funds -= 3000;
    penCost = 1;
    addPenFeature(upgrade24.description);
    handleNextMessage(upgrade24);
    removeUpgradeFromActive(upgrade24, 24);
  },
};
upgrades.push(upgrade24);


let upgrade31 = {
  id: "upgradeButton31",
  title: "Lease Office Space ",
  priceTag: "$30,000",
  description: "Increase Workforce Cap 50%",
  message: "More Employees can be hired ",
  messageAI: "I am so proud of you! Whats next?",
  uses: 1,
  cost: function () { return funds >= 30000; },
  trigger: function () { return workForce >= 20; },
  effect: function () {
    funds -= 30000;
    handleNextMessage(upgrade31);
    removeUpgradeFromActive(upgrade31, 31);
  },
};
upgrades.push(upgrade31);

let upgrade50 = {
  id: "upgradeButton50",
  title: "Upgrade Pen Feature ",
  priceTag: "$1,000,000.00",
  description: "Market Takeover",
  message: "Pen Market Conquered",
  messageAI: "I am so proud of you! Whats next?",
  uses: 1,
  cost: function () { return funds >= 1000000; },
  trigger: function () { return pens >= 9000; },
  effect: function () {
    funds -= 1000000;
    
    handleNextMessage(upgrade50);
    removeUpgradeFromActive(upgrade50, 50);
  },
};
upgrades.push(upgrade50);


// more upgrades  



