
function start()
{
    console.log("start")
    grid=zellen();

}
var nRows = 20
var nCols = 20
var breite =300
var a = breite/nCols
var hoehe = 300
var b =hoehe/nRows
var grid=zellen()
var nextgrid

function drawLine(x1,y1,x2,y2)
{
    const c = document.getElementById('sdl');
    const context = c.getContext('2d');
    //console.log("x1:"+x1+", y1:"+y1+", x2:"+x2+", y2:"+y2)
    context.beginPath();
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}

function drawYLine()
{
    for (var i = 0; i < nCols; i++) 
    {
        drawOneYLine(i)
    }
}
function drawXLine()
{
    for (var i = 0; i < nRows; i++) 
    {
        drawOneXLine(i)
    }
}
function drawOneYLine(n)

{
    var x1=n*a
    var y1=0
    var x2=x1
    var y2=hoehe
    drawLine(x1,y1,x2,y2)
}
function drawOneXLine(n)

{
    var x1=0
    var y1=n*a
    var x2=breite
    var y2=y1
    drawLine(x1,y1,x2,y2)
}
function drawAll()
{
    drawYLine()
    drawXLine()
    maleZellen()

}
function ueberPruefungDerNachbern(n,m)
{
    console.log("Nachbarn von " + n + ", " + m)
    let sum = 0
    for(let i = -1; i< 2; i++)
    {
        for(let j = -1; j < 2; j++)
        {
            let col = ( x + i + nCols) % nCols;
            let row = ( y + j + nRows) % nRows;
            sum +=grid[col][row];
        } 

    }

    return sum;
}

function regelnDesLebens(zustand, anzahlNachbarn)
{
    console.log(zustand)

    // Regel 1
    if (zustand == "dead" && anzahlNachbarn == 3 )
        return "alive"

    // Regel 2
    if(zustand == "alive" && anzahlNachbarn < 2 )
    return "dead"
    // Regel 3
    if(zustand == "alive" && anzahlNachbarn > 3 )
    return "dead"
}
function zellen()
{
    var grid=make2DArray(20,20);
    for(let i=0; i<nCols; i++)
    {
        for(let j=0; j<nRows; j++)
        {  
        grid[i][j]= Math.floor(Math.random()*2)    
        }
    }
    return grid
}

// next aurufen, wenn button next gedrueckt
function next()
{
    // neues grid der naecxhstenb generation aus "grid" berechnen

    // Schleife uber alle zellen im grid
    for(let i=0; i<nCols; i++)
    {
        for(let j=0; j<nRows; j++)
        {  
            
            nextgrid[i][j] = regelnDesLebens(grid[i][j], ueberPruefungDerNachbern(i,j)) 
        }
    }
    
    // mache nextgrid zu grid, male neuese, leeres nextgrid  
    //male grid
    maleZellen()

}

function maleZellen()
{
    // male alle zellen
    for(let i=0; i<nCols; i++)
    {
        for(let j=0; j<nRows; j++)
        { 
            maleEineZelle(i,j) 
        }
    }
}
function maleEineZelle(i,j)
{
    var x1=i*a
    var y1=j*b
    var x2=x1+5
    var y2=y1+5

    const c = document.getElementById('sdl');
    const context = c.getContext('2d');
    //console.log("zelle x1:"+x1+", y1:"+y1+", x2:"+x2+", y2:"+y2)
    if(grid[i][j] == 1 )
    {
        context.beginPath();
        context.lineWidth = 1;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }
}
function reset()
{
    grid=zellen()
     deleteAll()
     drawAll()
}
function deleteAll()
{
    const c = document.getElementById('sdl');
    const context = c.getContext('2d');

context.clearRect(0, 0, c.width, c.height);
}
/**
 * @param  {number} rows das ist die anzahl der zeilen
 * @param  {number} cols
 */
function make2DArray(rows, cols) {
    let x = [];
    for (let i = 0; i < rows; i++) {
      x[i] = [];
      for (let j = 0; j < cols; j++) {
        x[i][j] = [];
      }
    }
    return x;
  }
