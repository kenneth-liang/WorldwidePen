var upgrades = [] 
var activeUpgrades = []

var upgrade1 = {
    id: "upgradeButton1",
    title: "Enable SalesCorce",
    priceTag: "$5.00",
    description: "Increase sales capabilities by 25%",
    effect: function (){
        funds -= 5
        saleRate = .25
        updateSellRate();

        //upon clicking it remove it from the list
        //mode code
    }
}





