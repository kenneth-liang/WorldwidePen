let upgrades = [] 
let activeUpgrades = []

//sales upgrades
let upgrade1 = {
  id: "upgradeButton1",
  title: "Company Satchels ",
  priceTag: "$10.00",
  description: "Increase sales capabilities by 25%",
  message: "** Employees are equipped with Batagonia Bags to carry more pens",
  messageAI: "That's awesome! I wish I could wear clothes.",
  cost: function () {
    return funds >= 10;
  },
  setOff: function () {
    return workForce >= 2;
  },
  uses: 1,
  effect: function () {
    funds -= 10;
    saleRate = Math.ceil(saleRate * 1.25);
    updateSellRate();

    setTimeout(()=> {
      displayMessage(upgrade1.message)
       setTimeout(() => {
         displayMessage(upgrade1.messageAI);
       }, 2000);
    },1000);

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
  priceTag: "$20.00",
  description: "Increase sales capabilities by 50%",
  message: "** Mobility increased by riding scooters",
  messageAI: "Now that is good speed",
  cost: function () {
    return funds >= 20;
  },
  setOff: function () {
    return workForce >= 10;
  },
  uses: 1,
  effect: function () {
    funds -= 20;
    saleRate = Math.ceil(saleRate * 1.5);
    updateSellRate();
    setTimeout(() => {
      displayMessage(upgrade2.message);
      setTimeout(() => {
        displayMessage(upgrade2.messageAI);
      }, 2000);
    }, 1000);
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
  message: "** Company Vechicles issued.",
  messageAI: "Do we have insurance yet?",
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
    setTimeout(() => {
      displayMessage(upgrade3.message);
      setTimeout(() => {
        displayMessage(upgrade3.messageAI);
      }, 2000);
    }, 1000);
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
  message: "** Sales employees are now trained to hypnotize customers into buying more pens.",
  messageAI: "Wait, is this legal??",
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
    setTimeout(() => {
      displayMessage(upgrade4.message);
      setTimeout(() => {
        displayMessage(upgrade4.messageAI);
      }, 2000);
    }, 1000);
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
  message: "** Toggle to enable automatic materials purchasing.",
  cost: function () {
    return funds >= 10;
  },
  setOff: function () {
    return materials <= 750;
  },
  uses: 1,
  effect: function () {
    funds -= 20;
    document.getElementById("manufacturer").style = "visibility: visible";
    displayMessage(upgrade5.message);
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
  message: "** Gained more materials at each purchase ",
  messageAI: "You've gotten pretty good at negotiating.",
  cost: function () {
    return funds >= 20;
  },
  setOff: function () {
    return pens >= 1000;
  },
  uses: 1,
  effect: function () {
    funds -= 25;
    purchaseMatAmt *= 1.50;
    displayMessage(upgrade6.messageAI);
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
  priceTag: "$200.00",
  description: "Increase Materials Purchased by 180%",
  message: "** All materials produced in house factory.",
  messageAI: "The locals are happy you employed them. You are a good human",
  cost: function () {
    return funds >= 200;
  },
  setOff: function () {
    return pens >= 1000;
  },
  uses: 1,
  effect: function () {
    funds -= 200;
    purchaseMatAmt *= 1.80;
    setTimeout(() => {
      displayMessage(upgrade7.message);
      setTimeout(() => {
        displayMessage(upgrade7.messageAI);
      }, 2000);
    }, 1000);
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
  priceTag: "$1,000.00",
  description: "Increase Materials Purchased by 500% and Decrease cost by 50%",
  message: "** All factories relocated over seas",
  messageAI: "Folks don't seem that happy about this...",
  cost: function () {
    return funds >= 1000;
  },
  setOff: function () {
    return pens >= 15000;
  },
  uses: 1,
  effect: function () {
    funds -= 1000;
    matCost *= 0.5;
    purchaseMatAmt *= 5.0;
    setTimeout(() => {
      displayMessage(upgrade10.message);
      setTimeout(() => {
        displayMessage(upgrade10.messageAI);
      }, 2000);
    }, 1000);
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
  priceTag: "$5.00",
  description: "If you dare...",
  cost: function () {
    return funds >= 5;
  },
  setOff: function () {
    return workForce >= 1;
  },
  uses: 1,
  effect: function () {
    funds -= 5;
    researchAI();
    clearMessages();

    // how can i do this better... not dry
    setTimeout(()=> {
        displayMessage("Artificial Intelligence research beginning...")
        setTimeout(()=> {
          displayMessage("...")
          setTimeout(() => {
            displayMessage("beep")
            setTimeout(() => {
              displayMessage("...");
              setTimeout(() => {
                displayMessage("boop");
                setTimeout(() => {
                  displayMessage("...");
                  setTimeout(() => {
                    displayMessage("Hello, I am Targis your 'friendly' assistant!");
                    setTimeout(() => {
                    document.getElementById("targis").style =
                      "visibility: visible";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000)
      }, 1000);
    
    
    let ele = document.getElementById("upgradeButton15");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade15);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade15);


let upgrade16 = {
  id: "upgradeButton16",
  title: "Enhance Targis ",
  priceTag: "$250.00",
  description: "Targis learns a new skill ",
  messageAI: "Beep...Boop... I know statistics",
  cost: function () {
    return funds >= 250;
  },
  setOff: function () {
    return pens >= 3000
  },
  uses: 1,
  effect: function () {
    funds -= 250;
    targisKnowledge += 10
    setTimeout(() => {
      displayMessage(upgrade10.message);
      setTimeout(() => {
        displayMessage(upgrade10.messageAI);
      }, 2000);
    }, 1000);
    let ele = document.getElementById("upgradeButton16");
    ele.parentNode.removeChild(ele);
    let index = activeUpgrades.indexOf(upgrade15);
    activeUpgrades.splice(index, 1);
  },
};
upgrades.push(upgrade16);




//more upgrades ALOT 




