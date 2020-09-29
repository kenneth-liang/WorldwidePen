var upgrades = [];
var activeUpgrades = [];

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
    targis = 1;
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
  priceTag: "$2.00",
  description: "Compute Staistics",
  message: "Tracking Business",
  messageAI: "I'll show you well you are doing",
  uses: 1,
  cost: function () {
    return funds >= 2;
  },
  trigger: function () {
    return targis > 0;
  },
  effect: function () {
    statisticsFlag = 1;
    funds -= 2;
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
  priceTag: "$25.00",
  description: "Automatically repurchase materials",
  message: "Materials can automatically be purchase",
  messageAI: "Toggle to enable",
  uses: 1,
  cost: function () {
    return funds >= 25;
  },
  trigger: function () {
    return targisKnowledge >= 10 && workForce >= 10;
  },
  effect: function () {
    autoBuy = 1;
    funds -= 25;
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
  priceTag: "$2.00",
  description: "Track Global Dominance",
  message: "We shall conquere the world!",
  messageAI: "by selling pens of course",
  uses: 1,
  cost: function () {
    return funds >= 2;
  },
  trigger: function () {
    return targis > 0;
  },
  effect: function () {
    globeFlag = 1;
    funds -= 2;
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
    marketingFlag = 1;
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
    droneFlag = 1;
    funds -= 200;
    flash("droneDiv");
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
  cost: function () {
    return funds >= 10;
  },
  trigger: function () {
    return workForce > 3;
  },
  effect: function () {
    funds -= 10;
    penBoost += 0.25;
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
  priceTag: "$25.00",
  description: "Increase sales by 50%",
  message: "Carry Even More, Sell Even More",
  messageAI: "Those some big ol' satchels",
  uses: 1,
  cost: function () {
    return funds >= 25;
  },
  trigger: function () {
    return penBoost >= 1.25 && workForce >= 5;
  },
  effect: function () {
    funds -= 25;
    penBoost += 0.5;
    handleNextMessage(upgrade4);
    removeUpgradeFromActive(upgrade4, 4);
  },
};

let upgrade10 = {
  id: "upgradeButton10",
  title: "Enable Scooter Technology ",
  priceTag: "$30.00",
  description: "Increase sales by 100%",
  message: "Sales Mobility Increased",
  messageAI: "Now that is good speed, look at them go",
  uses: 1,
  cost: function () {
    return funds >= 30;
  },
  trigger: function () {
    return penBoost >= 1.7 && workForce >= 13;
  },
  effect: function () {
    funds -= 30;
    penBoost += 1.0;
    handleNextMessage(upgrade10);
    removeUpgradeFromActive(upgrade10, 10);
  },
};

let upgrade11 = {
  id: "upgradeButton11",
  title: "Pen Vans ",
  priceTag: "$40.00",
  description: "Increase sales capabilities by 150%",
  message: "Company Vechicles Issued",
  messageAI: "Do we have insurance yet?",
  uses: 1,
  cost: function () {
    return funds >= 40;
  },
  trigger: function () {
    return penBoost >= 2.75 && workForce >= 16;
  },
  effect: function () {
    funds -= 40;
    penBoost += 1.5;
    handleNextMessage(upgrade11);
    removeUpgradeFromActive(upgrade11, 11);
  },
};

let upgrade12 = {
  id: "upgradeButton12",
  title: "Research Hyponosis ",
  priceTag: "$100.00",
  description: "Increase sales capabilities by 200%",
  message:
    "Sales employees are now trained to hypnotize customers into buying more pens",
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
  priceTag: "$5000.00",
  description: "Increase sales capabilities by 500%",
  message: "Deploying Weapons",
  messageAI: "I mean drones",
  uses: 1,
  cost: function () {
    return funds >= 5000;
  },
  trigger: function () {
    return penBoost >= 6.0 && targisKnowledge >= 25;
  },
  effect: function () {
    funds -= 5000;
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
    return workForce > 10;
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
  description: "Increase Materials Purchased by 100%",
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
    matSupply *= 2.0;
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
    return pens > 50000;
  },
  effect: function () {
    funds -= 600;
    matSupply *= 5.0;
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
    return pens > 2000;
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
  description: "Increases workforce Productivity ",
  message: "Employee Happiness Increased ",
  messageAI: "Do I get a desk too? ",
  uses: 1,
  cost: function () {
    return funds >= 50;
  },
  trigger: function () {
    return pens > 15000;
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
  priceTag: "$7.00",
  description: "Increases workforce Productivity ",
  message: "Employee Hapiness Increased ",
  messageAI: "I like my Bagles byte sized ",
  uses: 1,
  cost: function () {
    return funds >= 7;
  },
  trigger: function () {
    return pens > 100;
  },
  effect: function () {
    funds -= 7;
    penBoost += 1.0;
    popularity += 1;
    handleNextMessage(upgrade32);
    removeUpgradeFromActive(upgrade32, 32);
  },
};
let upgrade33 = {
  id: "upgradeButton33",
  title: "Purchase Sales Team Coffee ",
  priceTag: "$15.00",
  description: "Increases workforce Productivity ",
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
  },
};

let upgrade34 = {
  id: "upgradeButton34",
  title: "Company Holiday Party ",
  priceTag: "$100.00",
  description: "Increases workforce Productivity ",
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
  },
};

// Drone upgrades

let upgrade40 = {
  id: "upgradeButton40",
  title: "Prismatic Alignment ",
  priceTag: "$1000.00",
  description: "Increases Drone Performance 25%  ",
  message: "Drones aligned with Prismatic Beam  ",
  messageAI: "+6 dmg vs armored units, ... kidding ",
  uses: 1,
  cost: function () {
    return funds >= 1000;
  },
  trigger: function () {
    return fleet > 3;
  },
  flag: 0,
  effect: function () {
    upgrade40.flag = 1;
    funds -= 1000;
    droneBoost += 0.25;
    handleNextMessage(upgrade40);
    removeUpgradeFromActive(upgrade40, 40);
    flash("fleet");
  },
};

let upgrade41 = {
  id: "upgradeButton41",
  title: "Graviton Catapult ",
  priceTag: "$1500.00",
  description: "Increases Drone Performance by an additional 50%  ",
  message: "Drones performance increased by 50%  ",
  messageAI: "Drone Launch Speed Maximized ",
  uses: 1,
  cost: function () {
    return funds >= 1500;
  },
  trigger: function () {
    return upgrade40.flag === 1;
  },
  effect: function () {
    funds -= 1500;
    droneBoost += 0.50;
    handleNextMessage(upgrade41);
    removeUpgradeFromActive(upgrade41, 41);
    flash("fleet");
  },
};
let upgrade42 = {
  id: "upgradeButton40",
  title: "Flux Vanes ",
  priceTag: "$2000.00",
  description: "Increases Drone Performance by an additional 100%  ",
  message: "Drones performance increased by 100%  ",
  messageAI: "Warp Speed Technology Enabled ",
  uses: 1,
  cost: function () {
    return funds >= 2000;
  },
  trigger: function () {
    return upgrade41.flag === 1;
  },
  effect: function () {
    funds -= 2000;
    droneBoost += 1;
    handleNextMessage(upgrade42);
    removeUpgradeFromActive(upgrade42, 42);
    flash("fleet");
  },
};

let upgrade50 = {
  id: "upgradeButton50",
  title: "Investment from Elon Tusk ",
  priceTag: "",
  description: "Funds +100, Materials +5000  ",
  message: "Looks like you are making some friends ",
  messageAI: "Use their invements wisely",
  uses: 1,
  cost: function () {
    return funds >= 0;
  },
  trigger: function () {
    return pens > 999;
  },
  effect: function () {
    funds += 100;
    materials += 1000;
    handleNextMessage(upgrade50);
    removeUpgradeFromActive(upgrade50, 50);
    flash("funds");
    flash("materials");
  },
};

let upgrade51 = {
  id: "upgradeButton51",
  title: "Investment from Mark Wuckerperg ",
  priceTag: "",
  description: "Funds +300, Materials +5000  ",
  message: "Looks like you are making some friends ",
  messageAI: "Use their invements wisely",
  uses: 1,
  cost: function () {
    return funds >= 0;
  },
  trigger: function () {
    return pens > 10000;
  },
  effect: function () {
    funds += 300;
    materials += 5000;
    handleNextMessage(upgrade51);
    removeUpgradeFromActive(upgrade51, 51);
    flash("funds");
    flash("materials");
  },
};

let upgrade60 = {
  id: "upgradeButton60",
  title: "New Slogan ",
  priceTag: "$200",
  description: "Improve marketing effectiveness by 50% ",
  message: "'A Pen that shows your attitude' ",
  messageAI: "Marketing is now 50% more effective ",
  
  uses: 1,
  cost: function () {
    return funds >= 200;
  },
  trigger: function () {
    return marketingFlag === 1;
  },
  flag: 0,
  effect: function () {
    upgrade60.flag = 1;
    funds -= 200;
    marketingEffectiveness *= 1.5;

    handleNextMessage(upgrade60);
    removeUpgradeFromActive(upgrade60, 60);
    flash("funds");
    flash("demand");

  },
};

let upgrade61 = {
  id: "upgradeButton61",
  title: "Catchy Jingle ",
  priceTag: "$300",
  description: "Double marketing effectiveness ",
  message: "I have a pen, I have an apple, APPLE PEN ",
  messageAI: "Marketing is now twice as effective ",
  uses: 1,
  flag: 0,
  cost: function () {
    return funds >= 300;
  },
  trigger: function () {
    return upgrade60.flag === 1;
  },
  effect: function () {
    upgrade61.flag = 1;
    funds -= 300
    marketingEffectiveness *= 2.0

    handleNextMessage(upgrade61);
    removeUpgradeFromActive(upgrade61, 61);
    flash("funds");
    flash("demand");

  },
};

let upgrade62 = {
  id: "upgradeButton62",
  title: "Hypno Harmonics ",
  priceTag: "$1000",
  description: "Use neuro-resonant frequencies to influence consumer behavior ",
  message: "Marketing is now 5 times more effective ",
  messageAI: "These ARE the pens you were looking for ",
  uses: 1,
  flag: 0,
  cost: function () {
    return funds >= 1000;
  },
  trigger: function () {
    return upgrade61.flag === 1;
  },
  effect: function () {
    upgrade62.flag = 1;
    funds -= 1000
    marketingEffectiveness *= 5.0

    handleNextMessage(upgrade62);
    removeUpgradeFromActive(upgrade62, 62);
    flash("funds");
    flash("demand");
  },
};

let upgrade63 = {
  id: "upgradeButton63",
  title: "Hostile Takeover ",
  priceTag: "$5000",
  description: "Acquire a controlling interest in Global Tic, our biggest rival ",
  message: "Global Tic acquired, public demand increased x5 ",
  messageAI: "Join us, we have cookies ",
  uses: 1,
  flag: 0,
  cost: function () {
    return funds >= 5000;
  },
  trigger: function () {
    return upgrade62.flag === 1;
  },
  effect: function () {
    upgrade63.flag = 1;
    funds -= 5000
    demandBoost *=5
    handleNextMessage(upgrade63);
    removeUpgradeFromActive(upgrade63, 63);
    flash("funds");
    flash("demand");
  },
};

let upgrade64 = {
  id: "upgradeButton64",
  title: "Full Monopoly ",
  priceTag: "$10000",
  description: "Establish full control over the world-wide pen market ",
  message: "Full market monopoly achieved, public demand increased x10 ",
  messageAI: "All your base are belong to us ",
  uses: 1,
  flag: 0,
  cost: function () {
    return funds >= 10000;
  },
  trigger: function () {
    return upgrade63.flag === 1;
  },
  effect: function () {
    upgrade64.flag = 1;
    funds -= 10000
    demandBoost *= 10
    handleNextMessage(upgrade64);
    removeUpgradeFromActive(upgrade64, 64);
    flash("funds");
    flash("demand");
  },
};

let upgrade20 = {
  id: "upgradeButton20",
  title: "Algorithmic Trading ",
  priceTag: "$200",
  description: "Develop an investment engine for generating funds ",
  message: "Investment engine unlocked ",
  messageAI: "Building wealth is a marathon ",
  uses: 1,
  flag: 0,
  cost: function () {
    return funds >= 200;
  },
  trigger: function () {
    return funds >= 100;
  },
  effect: function () {
    upgrade20.flag = 1;
    funds -= 200
    demandBoost *= 10
    handleNextMessage(upgrade20);
    removeUpgradeFromActive(upgrade20, 20);
  },
};



// Business
upgrades.push(upgrade1);
upgrades.push(upgrade2);
upgrades.push(upgrade4);
upgrades.push(upgrade5);
upgrades.push(upgrade6);
upgrades.push(upgrade10);
upgrades.push(upgrade11);
upgrades.push(upgrade12);
upgrades.push(upgrade13);
upgrades.push(upgrade14);
upgrades.push(upgrade15);
upgrades.push(upgrade16);


//Materials 
upgrades.push(upgrade3);
upgrades.push(upgrade7);
upgrades.push(upgrade8);
upgrades.push(upgrade9);

// Free-bee
upgrades.push(upgrade30);
upgrades.push(upgrade31);
upgrades.push(upgrade32);
upgrades.push(upgrade33);
upgrades.push(upgrade34);

// drone
upgrades.push(upgrade40);
upgrades.push(upgrade41);
upgrades.push(upgrade42);

// Jail-Cards
upgrades.push(upgrade50);
upgrades.push(upgrade51);

// Marketing
upgrades.push(upgrade60);
upgrades.push(upgrade61);
upgrades.push(upgrade62);
upgrades.push(upgrade63);
upgrades.push(upgrade64);

//Investing 
