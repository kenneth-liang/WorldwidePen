var upgrades = [] 
var activeUpgrades = []

var upgrade1 = {
  id: "upgradeButton1",
  title: "Enable SalesCorce ",
  priceTag: "$5.00",
  description: "Increase sales capabilities by 25%",
  cost: function () {
    return funds >= 5;
  },
  setOff: function () {
    return workForce >= 1;
  },
  uses: 1,
  effect: function () {
    funds -= 5;
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

var upgrade2 = {
  id: "upgradeButton2",
  title: "Purchase Manufacturer ",
  priceTag: "$10.00",
  description: "Automatically purchase materials when out",
  cost: function () {
    return funds >= 10;
  },
  setOff: function () {
    return materials <= 800;
  },
  uses: 1,
  effect: function () {
    funds -= 10;
    document.getElementById("manufacturer").style = "visibility: visible";
    let ele = document.getElementById("upgradeButton2");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade2);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade2);

//more upgrades ALOT 

