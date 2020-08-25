var upgrades = [] 
var activeUpgrades = [] 

let upgrade1 = {
  id: "upgradeButton1",
  title: "Research Artificial Inteligence ",
  priceTag: "$5.00",
  description: "If you dare",
  uses: 1,
  cost: function () {
    return funds >= 5;
  },
  trigger: function () {
    return pens >= 1;
  },
  messageArray: [
    "AI research initializing",
    "beep",
    "boop",
    "Hello, I am Targis",
    "your 'friendly' assistant.",
    "To get started",
    "I suggest hiring some sales humans",
  ],
  effect: function () {
    targis = 1
    funds -= 5;
    clearMessages();
    revealTargis();
    flash("targisChat");
    introduceTargis(upgrade1.messageArray);
    flash("targisHeader");
    removeUpgradeFromActive(upgrade1, 1);
  },
};
upgrades.push(upgrade1);

let upgrade2 = {
  id: "upgradeButton2",
  title: "Company Satchels ",
  priceTag: "$5.00",
  description: "Increase sales by 25%",
  message: "Carry More, Sell More",
  messageAI: "Awesome! I wish I could wear clothes",
  uses: 1,
  cost: function () { return funds >= 5; }, 
  trigger: function () { return targis > 0},
  effect: function () {
    funds -= 5;
    penBoost += .25
    handleNextMessage(upgrade2);
    removeUpgradeFromActive(upgrade2, 2);
    //trigger next
    upgrades.push(upgrade4);
  },
};

upgrades.push(upgrade2)

let upgrade3 = {
  id: "upgradeButton3",
  title: "Beg for More Materials ",
  priceTag: "$10.00",
  description: "Increase Materials Purchased by 25%",
  message: "Purchasing at 1250",
  messageAI: "This is what you call a discount!",
  uses: 1,
  cost: function () {
    return funds >= 10;
  },
  trigger: function () {
    return targis > 0;
  },
  effect: function () {
    funds -= 10;
    matSupply *= 1.25;
    handleNextMessage(upgrade3);
    removeUpgradeFromActive(upgrade3, 3);
    document.getElementById('matSupply').innerHTML = matSupply;
    //trigger next
    upgrade2.push(upgrade7)
  },
};

upgrades.push(upgrade3);


let upgrade4 = {
  id: "upgradeButton4",
  title: "Even Better Company Satchels ",
  priceTag: "$15.00",
  description: "Increase sales by 50%",
  message: "Carry Even More, Sell Even More",
  messageAI: "Those some big ol' satchels",
  uses: 1,
  cost: function () {
    return funds >= 15;
  },
  trigger: function () {
    return targis > 0;
  },
  effect: function () {
    funds -= 15;
    penBoost += 0.5;
    handleNextMessage(upgrade4);
    removeUpgradeFromActive(upgrade4, 4);
  },
};



let upgrade5 = {
  id: "upgradeButton5",
  title: "Targis Resarch 1 ",
  priceTag: "$10.00",
  description: "Compute Staistics",
  message: "...",
  messageAI: "I'll show you well you are doing",
  uses: 1,
  cost: function () {
    return funds >= 10;
  },
  trigger: function () {
    return targis > 0;
  },
  effect: function () {
    funds -= 10;
    document.getElementById("statsDiv").style = "visibility: visible";
    handleNextMessage(upgrade5);
    targisResearch(5);
    removeUpgradeFromActive(upgrade5, 5);
    //trigger next
    upgrades.push(upgrade6);
  },
};

upgrades.push(upgrade5);


let upgrade6 = {
  id: "upgradeButton6",
  title: "Targis Resarch  ",
  priceTag: "$15.00",
  description: "Automatically repurchase materials",
  message: "button revealed",
  messageAI: "Toggle to enable automatic materials purchasing",
  uses: 1,
  cost: function () {
    return funds >= 10;
  },
  trigger: function () {
    return targis > 0;
  },
  effect: function () {
    funds -= 15;
    document.getElementById("autoBuy").style = "visibility: visible";
    handleNextMessage(upgrade6);
    targisResearch(8);
    removeUpgradeFromActive(upgrade6, 6);
  },
};


let upgrade7 = {
  id: "upgradeButton3",
  title: "Beg for More Materials ",
  priceTag: "$10.00",
  description: "Increase Materials Purchased by 25%",
  message: "Purchasing at 1250",
  messageAI: "This is what you call a discount!",
  uses: 1,
  cost: function () {
    return funds >= 10;
  },
  trigger: function () {
    return targis > 0;
  },
  effect: function () {
    funds -= 10;
    matSupply *= 1.25;
    handleNextMessage(upgrade7);
    removeUpgradeFromActive(upgrade7, 3);
    document.getElementById("matSupply").innerHTML = matSupply;
    //trigger next
  },
};