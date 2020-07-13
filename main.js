var pens = 0 

function sellPen(){
    pens += 1
    document.getElementById("pens").textContent = "Pens: " + pens;
}