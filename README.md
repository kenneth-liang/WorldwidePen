# Worldwide Pen

[Click Here To Play](https://kenneth-liang.github.io/WorldwidePen/)

## Technologies
* JavaScript
* HTML
* CSS

![gameprev](https://user-images.githubusercontent.com/59374267/90361148-54811400-e012-11ea-9f5f-b01afcd531c7.gif)


## Background and Overview
Worldwide Pen is a easy to play incremental/clicker game. You start out as a door to door salesman of handmade pens. As you sell more and more pens, options begin to unfold in front of you as you seek to control the market. You can hire a salesperson(s) (to do the selling for you), strategize your business model to generate more revenue, improve your public image by donating to local organizations, and even get your very own AI robot all with just a click. 

As you eventually work up to be the CEO of a multi billion dollar corporation, your expansion begins to slowdown, selling pens has reached a limit. To succeed at this game you must devise a plan to exponentially grow while avoid leveling or falling off. Though continuing to hire more and more salespersons is an awesome idea, the high cost of which will not accelerate your sales as it once did. You must save and invest your money and resources into creating new innovative products to evolve as a company and remain a dominant force in the market. 

## Code Snips
* Because Game Status is saved to localStorage, users can refresh/revisit the page without losing their progress.

![Game Load](https://user-images.githubusercontent.com/59374267/90359964-20f0ba80-e00f-11ea-805f-8cd5b1b2dc2f.png)


```javascript
     
    var saveTimer = 0;
    
    saveTimer++;
    if (saveTimer >= 500){
      saveGame();
      saveTimer = 0;
    }
    
    let gameSaved = {
      pens: pens,
      funds: funds,
      penCost: penCost,
      materials: materials,
      purchaseMatAmt: purchaseMatAmt,
      saleRate: saleRate,
      matCost: matCost,
      hireCost: hireCost,
      workForce: workForce,
      displaySaleRate: displaySaleRate,
      manufacturingStatus: manufacturingStatus,
      blinkRate: blinkRate,
      saleRate: saleRate,
      targisKnowledge: targisKnowledge,
      targisAwake: targisAwake,
    };
    

    localStorage.setItem("gameSaved", JSON.stringify(gameSaved));
```

## Future Features
* Animation of a character walking on the sidewalk
* Idle State. Game progresses in the background even when window is closed. 
* Interact with Targis to increase it's knowledge (fx: play a game like tic-tac-toe)
* Next Stage - Office Building
