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
    var zahl=Math.floor(Math.random() * (300 - 1)) + 1
    return zahl
}
function Hundert ()
{
    hi()
    hi()
    hi()
    hi()
    hi()
    hi()
    hi()
    hi()
    hi()
    hi()


}
function gibfarbe()
{
    var r = getRandomInt(0, 255);
      var g = getRandomInt(0, 255);
      var b = getRandomInt(0, 255);
    return "rgb(" + r + "," + g + "," + b + ")";

}
 //canvas.drawline(1,2,5,6)
 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  