let upgrades = [] 
let activeUpgrades = []

//sales upgrades
let upgrade1 = {
  id: "upgradeButton1",
  title: "Company Satchels ",
  priceTag: "$10.00",
  description: "Increase sales capabilities by 25%",
  message: "Sales employees are equipped with Batagonia Bags to carry more pens",
  cost: function () {
    return funds >= 10;
  },
  setOff: function () {
    return workForce >= 1;
  },
  uses: 1,
  effect: function () {
    funds -= 10;
    saleRate = Math.ceil(saleRate * 1.25);
    updateSellRate();

    //upon clicking it remove it from the list
    let ele = document.getElementById("upgradeButton1");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade1);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade1)

let upgrade2 = {
  id: "upgradeButton2",
  title: "Enable Scooter Technology ",
  priceTag: "$15.00",
  description: "Increase sales capabilities by 50%",
  message: "Sales employees mobility increased with scooters",
  cost: function () {
    return funds >= 20;
  },
  setOff: function () {
    return workForce >= 10;
  },
  uses: 1,
  effect: function () {
    funds -= 20;
    saleRate = Math.ceil(saleRate * 1.50);
    updateSellRate();

    //upon clicking it remove it from the list
    let ele = document.getElementById("upgradeButton2");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade2);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade2)

let upgrade3 = {
  id: "upgradeButton3",
  title: "Company Vehicle ",
  priceTag: "$35.00",
  description: "Increase sales capabilities by 75%",
  message: "Carrying capacity and mobility increased",
  cost: function () {
    return funds >= 35;
  },
  setOff: function () {
    return workForce >= 15;
  },
  uses: 1,
  effect: function () {
    funds -= 35;
    saleRate = Math.ceil(saleRate * 1.75);
    updateSellRate();

    //upon clicking it remove it from the list
    let ele = document.getElementById("upgradeButton3");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade3);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade3)

let upgrade4 = {
  id: "upgradeButton4",
  title: "Research Hyponosis  ",
  priceTag: "$125.00",
  description: "Increase sales capabilities by 100%",
  message: "Sales employees are now trained to hypnotize customers into buying more pens.",
  cost: function () {
    return funds >= 125;
  },
  setOff: function () {
    return workForce >= 20;
  },
  uses: 1,
  effect: function () {
    funds -= 100;
    saleRate = Math.ceil(saleRate * 2.00);
    updateSellRate();

    //upon clicking it remove it from the list
    let ele = document.getElementById("upgradeButton4");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade4);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade4)



// Materials upgrades 
let upgrade5 = {
  id: "upgradeButton5",
  title: "Purchase Manufacturer ",
  priceTag: "$10.00",
  description: "Automatically purchase materials when out",
  message: "Toggle to enable automatic materials purchasing.",
  cost: function () {
    return funds >= 20;
  },
  setOff: function () {
    return materials <= 750;
  },
  uses: 1,
  effect: function () {
    funds -= 20;
    document.getElementById("manufacturer").style = "visibility: visible";
    let ele = document.getElementById("upgradeButton5");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade5);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade5);

let upgrade6 = {
  id: "upgradeButton6",
  title: "Bargaining for Dummies ",
  priceTag: "$20.00",
  description: "Increase Materials Purchased by 50%",
  message: "Purchaed Materials: 1000 -> Purchaed Materials: 1500 ",
  cost: function () {
    return funds >= 25;
  },
  setOff: function () {
    return matCost >= 12;
  },
  uses: 1,
  effect: function () {
    funds -= 25;
    purchaseMatAmt *= 1.50;

    let ele = document.getElementById("upgradeButton6");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade6);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade6);

let upgrade7 = {
  id: "upgradeButton7",
  title: "Purchase Factory ",
  priceTag: "$500.00",
  description: "Increase Materials Purchased by 180%",
  message: "Locally create your materials in your own factory. Purchaed Materials: 1500 -> Purchaed Materials: 2700 ",
  cost: function () {
    return funds >= 500;
  },
  setOff: function () {
    return matCost >= 100;
  },
  uses: 1,
  effect: function () {
    funds -= 1000;
    purchaseMatAmt *= 1.80;

    let ele = document.getElementById("upgradeButton7");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade7);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade7);

let upgrade10 = {
  id: "upgradeButton10",
  title: "Outsource ",
  priceTag: "$10,000.00",
  description: "Increase Materials Purchased by 500% and Decrease cost by 50%",
  message: "All factories relocated over seas. Folks don't seem that happy...",
  cost: function () {
    return funds >= 10000;
  },
  setOff: function () {
    return matCost >= 150;
  },
  uses: 1,
  effect: function () {
    funds -= 10000;
    matCost *= .50;
    purchaseMatAmt *= 5.00;
    // decrease popularity 
    let ele = document.getElementById("upgradeButton10");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade10);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade10);




let upgrade15 = {
  id: "upgradeButton15",
  title: "Research Artificial Inteligence ",
  priceTag: "$15,000.00",
  description: "If you dare...",
  message: "AI research beginning...beep...boop...",
  cost: function () {
    return funds >= 25000;
  },
  setOff: function () {
    return pens >= 500000;
  },
  uses: 1,
  effect: function () {
    funds -= 25000;
    researchAI();
    document.getElementById("aiDiv").style = "visibility: visible";

    let ele = document.getElementById("upgradeButton15");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade15);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade15);

//more upgrades ALOT 




