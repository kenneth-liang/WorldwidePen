var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 300;
context.canvas.width = 948;

rectangle = {

  height:32,
  jumping:true,
  width:32,
  x:144, // center of the canvas
  x_velocity:0,
  y:0,
  y_velocity:0

};




controller = {

  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 37:// left key
        controller.left = key_state;
      break;
      case 38:// up key
        controller.up = key_state;
      break;
      case 39:// right key
        controller.right = key_state;
      break;

    }

  }

};

let img = new Image();
// img.onload= function () {
//   img_obj.source = img
// }

img.src = "https://piskel-imgstore-b.appspot.com/img/56118f51-c8cf-11ea-bca2-311775629203.gif"


loop = function() {




  if (controller.up && rectangle.jumping == false) {

    rectangle.y_velocity -= 20;
    rectangle.jumping = true;

  }

  if (controller.left) {

    rectangle.x_velocity -= 0.5;

  }

  if (controller.right) {

    rectangle.x_velocity += 0.5;

  }

  rectangle.y_velocity += 1.5;// gravity
  rectangle.x += rectangle.x_velocity;
  rectangle.y += rectangle.y_velocity;
  rectangle.x_velocity *= 0.9;// friction
  rectangle.y_velocity *= 0.9;// friction

  // if rectangle is falling below floor line
  if (rectangle.y > 300 - 80 - 32) {

    rectangle.jumping = false;
    rectangle.y = 300 - 80 - 32;
    rectangle.y_velocity = 0;

  }

  // if rectangle is going off the left of the screen
  if (rectangle.x < -32) {

    rectangle.x = 948;

  } else if (rectangle.x > 948) {// if rectangle goes past right boundary

    rectangle.x = -32;

  }

  context.drawImage(img, 0, 0, 948, 300)
    //context.fillStyle = "rgba(0, 0, 0, 0.05)";
    //context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

  // context.fillStyle = "rgba(0, 0, 0, 0.05)";
  // context.fillRect(0, 0, 948, 300);// x, y, width, height
  context.fillStyle = "orange";// hex for red
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();

  // context.strokeStyle = "#202830";
  // context.lineWidth = 4;
  // context.beginPath();
  // context.moveTo(0, 164);
  // context.lineTo(320, 164);
  // context.stroke();

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);