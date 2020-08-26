var upgrades = [] 
var activeUpgrades = [] 



// Targis upgrades 
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
    "I suggest hiring some more sales humans",
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
     flash("salesDiv");
    document.getElementById("salesDiv").style = "visibility: visible";
  },
};


let upgrade5 = {
  id: "upgradeButton5",
  title: "Targis Resarch 1 ",
  priceTag: "$5.00",
  description: "Compute Staistics",
  message: "Tracking Business",
  messageAI: "I'll show you well you are doing",
  uses: 1,
  cost: function () {
    return funds >= 5;
  },
  trigger: function () {
    return targis > 0;
  },
  effect: function () {
    statisticsFlag = 1;
    funds -= 5;
    flash("statsDiv");
    document.getElementById("statsDiv").style = "visibility: visible";
    handleNextMessage(upgrade5);
    targisResearch(5);
    removeUpgradeFromActive(upgrade5, 5);
  },
};


let upgrade6 = {
  id: "upgradeButton6",
  title: "Targis Resarch 3 ",
  priceTag: "$15.00",
  description: "Automatically repurchase materials",
  message: "Materials can automatically be purchase",
  messageAI: "Toggle to enable",
  uses: 1,
  cost: function () {
    return funds >= 15;
  },
  trigger: function () {
    return targisKnowledge >= 10;
  },
  effect: function () {
    autoBuy = 1;
    funds -= 15;
    flash("autoBuy");
    document.getElementById("autoBuy").style = "visibility: visible";
    handleNextMessage(upgrade6);
    targisResearch(8);
    removeUpgradeFromActive(upgrade6, 6);
  },
};



let upgrade15 = {
  id: "upgradeButton15",
  title: "Targis Resarch 2 ",
  priceTag: "$5.00",
  description: "Track Global Dominance",
  message: "We shall conquere the world!",
  messageAI: "by selling pens of course",
  uses: 1,
  cost: function () {
    return funds >= 5;
  },
  trigger: function () {
    return targis > 0;
  },
  effect: function () {
    globeFlag = 1
    funds -= 5;
    flash("globeDiv");
    document.getElementById("globeDiv").style = "visibility: visible";
    handleNextMessage(upgrade15);
    targisResearch(7);
    removeUpgradeFromActive(upgrade15, 15);
  },
};

let upgrade16 = {
  id: "upgradeButton16",
  title: "Targis Resarch 4 ",
  priceTag: "$35.00",
  description: "Research Marketing",
  message: "Processing Public Data",
  messageAI: "I will make the product more appealing",
  uses: 1,
  cost: function () {
    return funds >= 35;
  },
  trigger: function () {
    return targisKnowledge >= 15;
  },
  effect: function () {
    marketingFlag = 1
    globeFlag = 1;
    funds -= 35;
    flash("marketingDiv");
    document.getElementById("marketingDiv").style = "visibility: visible";
    handleNextMessage(upgrade16);
    targisResearch(7);
    removeUpgradeFromActive(upgrade16, 16);
  },
};



let upgrade14 = {
  id: "upgradeButton14",
  title: "Targis Resarch 5 ",
  priceTag: "$200.00",
  description: "Research Drones",
  message: "Deploying Weapons",
  messageAI: "I mean drone helpers",
  uses: 1,
  cost: function () {
    return funds >= 200;
  },
  trigger: function () {
    return targisKnowledge >= 25;
  },
  effect: function () {
    droneFlag = 1
    funds -= 200;
    flash("droneDiv")
    document.getElementById("droneDiv").style = "visibility: visible";
    handleNextMessage(upgrade14);
    targisResearch(5);
    removeUpgradeFromActive(upgrade14, 14);
  },
};


// Sales Upgrades 

let upgrade2 = {
  id: "upgradeButton2",
  title: "Company Satchels ",
  priceTag: "$10.00",
  description: "Increase sales by 25%",
  message: "Carry More, Sell More",
  messageAI: "Awesome! I wish I could wear clothes",
  uses: 1,
  cost: function () { return funds >= 10; }, 
  trigger: function () { return targis > 0},
  effect: function () {
    funds -= 10;
    penBoost += .25
    handleNextMessage(upgrade2);
    removeUpgradeFromActive(upgrade2, 2);
    //trigger next
    upgrades.push(upgrade4);
    upgrades.push(upgrade6);

  },
};


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
    return penBoost >= 1.25;
  },
  effect: function () {
    funds -= 15;
    penBoost += 0.5;
    handleNextMessage(upgrade4);
    removeUpgradeFromActive(upgrade4, 4);
  },
};

let upgrade10 = {
  id: "upgradeButton10",
  title: "Enable Scooter Technology ",
  priceTag: "$25.00",
  description: "Increase sales by 100%",
  message: "Sales Mobility Increased",
  messageAI: "Now that is good speed, look at them go",
  uses: 1,
  cost: function () {
    return funds >= 25;
  },
  trigger: function () {
    return penBoost >= 1.70;
  },
  effect: function () {
    funds -= 25;
    penBoost += 1.00;
    handleNextMessage(upgrade10);
    removeUpgradeFromActive(upgrade10, 10);
  },
};

let upgrade11 = {
  id: "upgradeButton11",
  title: "Pen Vans ",
  priceTag: "$50.00",
  description: "Increase sales capabilities by 150%",
  message: "Company Vechicles Issued",
  messageAI: "Do we have insurance yet?",
  uses: 1,
  cost: function () {
    return funds >= 50;
  },
  trigger: function () {
    return penBoost >= 2.75;
  },
  effect: function () {
    funds -= 50;
    penBoost += 1.50;
    handleNextMessage(upgrade11);
    removeUpgradeFromActive(upgrade11, 11);
  },
};

let upgrade12 = {
  id: "upgradeButton12",
  title: "Research Hyponosis ",
  priceTag: "$100.00",
  description: "Increase sales capabilities by 200%",
  message: "Sales employees are now trained to hypnotize customers into buying more pens",
  messageAI: "Wait, is this legal?",
  uses: 1,
  cost: function () {
    return funds >= 100;
  },
  trigger: function () {
    return penBoost >= 4.0;
  },
  effect: function () {
    funds -= 100;
    penBoost += 2.0;
    handleNextMessage(upgrade12);
    removeUpgradeFromActive(upgrade12, 12);
  },
};

let upgrade13 = {
  id: "upgradeButton13",
  title: "Research Hyponosis Drones ",
  priceTag: "$10000.00",
  description: "Increase sales capabilities by 500%",
  message: "Deploying Weapons",
  messageAI: "I mean drones",
  uses: 1,
  cost: function () {
    return funds >= 10000;
  },
  trigger: function () {
    return penBoost >= 6.0 && targisKnowledge >= 25;
  },
  effect: function () {
    funds -= 10000;
    penBoost += 5.0;
    handleNextMessage(upgrade13);
    removeUpgradeFromActive(upgrade13, 13);
  },
};

// Materials 
let upgrade3 = {
  id: "upgradeButton3",
  title: "Beg for More Materials ",
  priceTag: "$20.00",
  description: "Increase Materials Purchased by 25%",
  message: "Purchasing at 1250",
  messageAI: "This is what you call a discount!",
  uses: 1,
  cost: function () {
    return funds >= 20;
  },
  trigger: function () {
    return targisKnowledge > 5;
  },
  effect: function () {
    funds -= 20;
    matSupply *= 1.25;
    flash("matSupply");
    handleNextMessage(upgrade3);
    removeUpgradeFromActive(upgrade3, 3);
    document.getElementById("matSupply").innerHTML = Math.floor(matSupply);
    //trigger next
  },
};



let upgrade7 = {
  id: "upgradeButton7",
  title: "Bargaining For Dummies ",
  priceTag: "$100.00",
  description: "Increase Materials Purchased by 50%",
  message: "Purchasing at 1875",
  messageAI: "More materials gained at each purchase",
  uses: 1,
  cost: function () {
    return funds >= 100;
  },
  trigger: function () {
    return matSupply > 1000;
  },
  effect: function () {
    funds -= 100;
    matSupply *= 1.50;
    flash("matSupply");
    handleNextMessage(upgrade7);
    removeUpgradeFromActive(upgrade7, 7);
    document.getElementById("matSupply").innerHTML = Math.floor(matSupply);
    //trigger next
    
  },
};

let upgrade8 = {
  id: "upgradeButton8",
  title: "The Clone Machine ",
  priceTag: "$150.00",
  description: "Double Materials Earned",
  message: "Targis can clone materials",
  messageAI: "CRTL + C, CRTL + V",
  uses: 1,
  cost: function () {
    return funds >= 150;
  },
  trigger: function () {
    return matSupply > 1500;
  },
  effect: function () {
    funds -= 150;
    matSupply *= 2.0;
    flash("matSupply");
    targisResearch(5);
    handleNextMessage(upgrade8);
    removeUpgradeFromActive(upgrade8, 8);
    document.getElementById("matSupply").innerHTML = Math.floor(matSupply);
  },
};

let upgrade9 = {
  id: "upgradeButton9",
  title: "Purchase Factory ",
  priceTag: "$600.00",
  description: "Maximum Manufacturing Efficiency  ",
  message: "All pens created in house ",
  messageAI: "I am the captain now",
  uses: 1,
  cost: function () {
    return funds >= 600;
  },
  trigger: function () {
    return pens > 5000;
  },
  effect: function () {
    funds -= 600;
    matSupply *= 3.0;
    targisResearch(10);
    flash("matSupply");
    handleNextMessage(upgrade9);
    removeUpgradeFromActive(upgrade9, 9);
    document.getElementById("matSupply").innerHTML = Math.floor(matSupply);
  },
};

// Good Deeds
let upgrade30 = {
  id: "upgradeButton30",
  title: "Donate to Wildlife Consv. ",
  priceTag: "$25.00",
  description: "Increases Public Demand ",
  message: "The world knows we love animals ",
  messageAI: "What sound do foxes make? ",
  uses: 1,
  cost: function () {
    return funds >= 25;
  },
  trigger: function () {
    return pens > 200;
  },
  effect: function () {
    funds -= 25;
    popularity += 5;
    handleNextMessage(upgrade30);
    removeUpgradeFromActive(upgrade30, 30);
    flash("demand");
  },
};
let upgrade31 = {
  id: "upgradeButton31",
  title: "Purchase Company Office ",
  priceTag: "$50.00",
  description: "Increases Workforce Productivity ",
  message: "Employee Hapiness Increased ",
  messageAI: "Do I get a desk too? ",
  uses: 1,
  cost: function () {
    return funds >= 50;
  },
  trigger: function () {
    return pens > 500;
  },
  effect: function () {
    funds -= 50;
    penBoost += 3.0;
    popularity += 3;
    handleNextMessage(upgrade31);
    removeUpgradeFromActive(upgrade31, 31);
    flash("demand");
  },
};
let upgrade32 = {
  id: "upgradeButton32",
  title: "Purchase Sales Team Bagels ",
  priceTag: "$10.00",
  description: "Increases Workforce Productivity ",
  message: "Employee Hapiness Increased ",
  messageAI: "I like my Bagles byte sized ",
  uses: 1,
  cost: function () {
    return funds >= 10;
  },
  trigger: function () {
    return pens > 100;
  },
  effect: function () {
    funds -= 10;
    penBoost += 1.0;
    popularity += 1;
    handleNextMessage(upgrade32);
    removeUpgradeFromActive(upgrade32, 32);
    flash("demand");
  },
};
let upgrade33 = {
  id: "upgradeButton33",
  title: "Purchase Sales Team Coffee ",
  priceTag: "$15.00",
  description: "Increases Workforce Productivity ",
  message: "Employee Hapiness Increased ",
  messageAI: "drinkCoffee() ",
  uses: 1,
  cost: function () {
    return funds >= 15;
  },
  trigger: function () {
    return pens > 1000;
  },
  effect: function () {
    funds -= 15;
    penBoost += 1.5;
    popularity += 3;
    handleNextMessage(upgrade33);
    removeUpgradeFromActive(upgrade33, 33);
    flash("demand");
  },
};

let upgrade34 = {
  id: "upgradeButton34",
  title: "Company Holiday Party ",
  priceTag: "$100.00",
  description: "Increases Workforce Productivity ",
  message: "Employee Hapiness Increased ",
  messageAI: "Issa Party Issa Party Aye ",
  uses: 1,
  cost: function () {
    return funds >= 100;
  },
  trigger: function () {
    return pens > 10000;
  },
  effect: function () {
    funds -= 100;
    penBoost += 1.0;
    popularity += 2;
    handleNextMessage(upgrade34);
    removeUpgradeFromActive(upgrade34, 34);
    flash("demand");
  },
};

// Drone upgrades 

let upgrade40 = {
  id: "upgradeButton34",
  title: "Prismatic Alignment ",
  priceTag: "$1000.00",
  description: "Increases Drone Efficiency  ",
  message: "Drones aligned with Prismatic Beam  ",
  messageAI: "+6 dmg vs armored units, ... kidding ",
  uses: 1,
  cost: function () {
    return funds >= 100;
  },
  trigger: function () {
    return pens > 50000;
  },
  effect: function () {
    funds -= 1000;
    droneBoost += 0.25;
    handleNextMessage(upgrade40);
    removeUpgradeFromActive(upgrade40, 40);
    flash("fleet");
  },
};






let upgrade50 = {
  id: "upgradeButton50",
  title: "Investmant ",
  priceTag: "$0.00",
  description: "Get out of Jail-Free Card  ",
  message: "Money and Materials Receieved ",
  messageAI: "Better think before you click",
  uses: 1,
  cost: function () {
    return funds >= 0;
  },
  trigger: function () {
    return funds < matCost && Math.floor(materials) === 0;
  },
  effect: function () {
    funds += 500
    materials += 2000
    handleNextMessage(upgrade50);
    removeUpgradeFromActive(upgrade50, 50);
    flash("funds");
    flash("materials");
  },
};




// Business 
upgrades.push(upgrade1);
upgrades.push(upgrade2);
upgrades.push(upgrade3);
upgrades.push(upgrade4);
upgrades.push(upgrade5);
upgrades.push(upgrade6);
upgrades.push(upgrade7);
upgrades.push(upgrade8);
upgrades.push(upgrade9);
upgrades.push(upgrade10);
upgrades.push(upgrade11);
upgrades.push(upgrade12);
upgrades.push(upgrade13);
upgrades.push(upgrade14);
upgrades.push(upgrade15);
upgrades.push(upgrade16);

// Free-bee
upgrades.push(upgrade30);
upgrades.push(upgrade31);
upgrades.push(upgrade32);
upgrades.push(upgrade33);
upgrades.push(upgrade34);


// drone 
upgrades.push(upgrade40);


// Jail-Cards
upgrades.push(upgrade50);


