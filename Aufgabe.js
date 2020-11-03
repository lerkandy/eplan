function hi(Name, gruss)
{
//alert(gruss + " " + name);
//alert(name);
    var c = document.getElementById("myCanvas");
    var ctx =c.getContext('2d');

    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(getrandomx(),getrandomx())
    ctx.lineTo(getrandomx(),getrandomx())
    ctx.strokeStyle =gibfarbe()
    ctx.stroke();
}
function getrandomx ()
{
    var zahl=Math.floor(Math.random() * (600 - 1)) + 1
    return zahl
}
function Hundert ()
{
    var anzahl = document.forms["f1"]["anzahl"].value;
    for (var i = 1; i <= anzahl; i++)
    {
        hi()
    }
}
function gibfarbe()
{
    var r = getRandomInt(0, 255);
      var g = getRandomInt(0, 255);
      var b = getRandomInt(0, 255);
    return "rgb(" + r + "," + g + "," + b + ")";

}
function gradInRadient(grad)
{
	return (grad*Math.PI)/180;
}
 //canvas.drawline(1,2,5,6)
 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function Kreis(kontext,x,y)
    {
    	var c = document.getElementById("myCanvas");
        var ctx =c.getContext('2d');
        var radius =90;
        ctx.beginPath();
    	ctx.arc(getrandomx(),getrandomx(),radius,0,gradInRadient(360),true);
    	ctx.strokeStyle =gibfarbe();
        ctx.closePath();
        ctx.stroke();
    }
function Hkreise ()
{
    var anzahl = document.forms["f1"]["anzahl"].value;
    for (var i = 1; i <= anzahl; i++)
    {
        Kreis()
    }
}
function Dreieck(kontext,x,y)
{
    var c = document.getElementById("myCanvas");
    var ctx =c.getContext('2d');
    ctx.beginPath();
	ctx.moveTo(getrandomx (),getrandomx ());
	ctx.lineTo(getrandomx (),getrandomx ());
	ctx.lineTo(getrandomx (),getrandomx ());
    ctx.closePath();
    ctx.strokeStyle =gibfarbe();
    ctx.stroke()
}
function Hdreiecke ()
{
    var anzahl = document.forms["f1"]["anzahl"].value;
    for (var i = 1; i <= anzahl; i++)
    {
        Dreieck()
    }
}

let isDrawing = false;
let x = 0;
let y = 0;
function start()
{
    const c = document.getElementById('myCanvas');
    const context = c.getContext('2d');
    myCanvas.addEventListener('mousedown', e => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
      });
      
      myCanvas.addEventListener('mousemove', e => {
        if (isDrawing === true) {
          drawLine(context, x, y, e.offsetX, e.offsetY);
          x = e.offsetX;
          y = e.offsetY;
        }
      });
      
      myCanvas.addEventListener('mouseup', e => {
        if (isDrawing === true) {
          drawLine(context, x, y, e.offsetX, e.offsetY);
          x = 0;
          y = 0;
          isDrawing = false;
        }
      });
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup


function drawLine(context, x1, y1, x2, y2) {
 console.log("x1:"+x1+", y1:"+y1+", x2:"+x2+", y2:"+y2)
    context.beginPath();
  context.strokeStyle = gibfarbe();
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}