/*


Das Game of Life von John Horton Conway;Programmiert von andreas Kerl





Variabelen
*/
var nRows
var nCols
const breite =300
const hoehe = 300
var a 
var b 
var grid
var nextgrid 
var timer


function start()
{
    console.log("start")
}

function init() //Zellen bearbeiten mit der maus
{
    //const c = document.getElementById('sdl')
    sdl.addEventListener('mousedown', e => {
        x = e.offsetX
        y = e.offsetY
        
        if (x>=0 && x<breite && y>=0 && y<hoehe) // exclude clicks on border
        {
            var m =Math.floor(x/breite*nCols)
            var n=Math.floor(y/hoehe*nRows)
            if ( grid[m][n] == 1)
            {
                grid[m][n]=0
            }
            else
            {
                grid[m][n]=1
            }
           
        }
        else
        {
            console.log("Upds, click on border: " + x + ", " + y)
        }
        deleteAll()
        drawAll()
      })
    initVars()
    drawAll()
}



function initVars(clear)    //eingabe um die Zellen anzahl zu bestimmen
{
    var eingabe = parseInt(document.forms["f1"]["eingabe"].value)
    nRows = eingabe
    nCols = eingabe
    a = breite / nCols
    b = hoehe / nRows
    grid = zellen(clear)
    nextgrid = zellen(true)
}

function drawLine(x1,y1,x2,y2)  //die Linien zwischen den Zellen zeichnen (optional)
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

function drawAll()//spielfeld und zellen zeichnen
{
    //console.log("functioniert")
    //drawYLine()
    //drawXLine()
    maleZellen()
   

}

/*
noch nicht realiesiert 
function gibFarbe() //eine zufällige Farbe für die Zellen bekommen (optional)
{
    var r = getRandomInt(0, 255);
      var g = getRandomInt(0, 255);
      var b = getRandomInt(0, 255);
    return "rgb(" + r + "," + g + "," + b + ")";

}
*/

function ueberPruefungDerNachbern(n,m)//wie viele nachbern hat eine zelle
{
    //console.log("Nachbarn von " + n + ", " + m)
    /*
    let sum = 0 
    for(let i = -1; i< 2; i++)
    {
        for(let j = -1; j < 2; j++)
        {
            let col = ( n + i + nCols) % nCols;
            let row = ( m + j + nRows) % nRows;
            sum+=grid[col][row];
        } 
        
    }
    sum -= grid[n][m]
    //console.log("nachbarn " + sum )
    return sum;
    */
   let sum = 0
   for(let i = -1; i< 2; i++) 
   {
    for(let j = -1; j < 2; j++)
    {
        let col = ( n + i + nCols) % nCols;
        let row = ( m + j + nRows) % nRows;
        if(grid[col][row]>=1)
        {
            
            sum++
        }
         //console.log("nachbarn" )
    }
   }
   if(grid[n][m]>=1)
        {
            sum--
        }  
    return sum
}

function regelnDesLebens(zustand, anzahlNachbarn)// soll eine Zelle überleben Ja=1 nein =0
{
    //console.log(zustand)
    let lebt = ( zustand==0? false : true);

    // Regel 1
    if ( !lebt && anzahlNachbarn == 3 )
        return 1

    // Regel 2
    if( lebt && anzahlNachbarn < 2 )
        return 0
    // Regel 3
    if( lebt && anzahlNachbarn > 3 )
        return 0

    return ( zustand==0? 0 : 1)
}

function zellen(clear)//zellen bestimmen und Array befüllen mit der info ob die zelle lebt oder tot ist
{
    var grid=make2DArray(nCols,nRows);
    for(let i=0; i<nCols; i++)
    {
        for(let j=0; j<nRows; j++)
        {  
            var wert
            if (clear)
            {
                wert = 0
            }
            else
            {
                wert = Math.floor(Math.random()*2)
            }
            
            grid[i][j]=wert;     
        }
    }
    return grid
}

function maleZellen()//
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

function colors(alter)
{
    var farbmapping = {1:"#001100", 2:"#002200", 3:"#003300", 4:"#004400", 5:"#005500", 6:"#006600", 7:"#007700"};


    var farbe = "#ff0000"
    if(alter <=8)
    {
        farbe = farbmapping[alter]
    } else if(alter< 20)
    {
        farbe = "#00ff00"
    }
    else
    {
        farbe = "#0000ff"
    }
    
    
   return farbe
}

function maleEineZelle(i,j)
{
    var x1=i*a
    var y1=j*b
    var x2=x1
    var y2=y1

    const c = document.getElementById('sdl');
    const context = c.getContext('2d');
   // console.log("zelle x1:"+x1+", y1:"+y1+", x2:"+x2+", y2:"+y2)
    if(grid[i][j] >= 1 )
    {
        //context.fillRect = gibFarbe()
        context.fillStyle = colors(grid[i][j])
        context.fillRect(x1,y1,a,b);
    }
}

// next aurufen, wenn button next gedrueckt
function next()//die nächste generation bestimmen
{
    // neues grid der naecxhstenb generation aus "grid" berechnen

    // Schleife uber alle zellen im grid
    for(let i=0; i<nCols; i++)
    {
        for(let j=0; j<nRows; j++)
        {  
            var soWarDieZelleBisher = grid[i][j]
            var sollDieZelleUeberleben = regelnDesLebens(grid[i][j], ueberPruefungDerNachbern(i,j)) 
            var soSollDieNeueZelleSein

            if (sollDieZelleUeberleben == 0)
            {
                // Zelle soll sterben
                soSollDieNeueZelleSein=0 // war vorher schon tot oder nicht, das ist egal
            }
            else
            {
                // Zelle soll leben
                if (soWarDieZelleBisher >= 1)
                {
                    soSollDieNeueZelleSein=soWarDieZelleBisher + 1 // wenn sie gealtert ist
                }
                else 
                {
                    soSollDieNeueZelleSein=1//frisch geboren
                }
            }

            nextgrid[i][j] = soSollDieNeueZelleSein
        }
    }
    
    // mache nextgrid zu grid, male neuese, leeres nextgrid  
    for(let i=0; i<nCols; i++)
    {
        for(let j=0; j<nRows; j++)
        {  
            
            grid[i][j] = nextgrid[i][j] 
        }
    }
    //male grid
    deleteAll()
    drawAll()

}

function reset(clear)//neue anordnung der zellen
{
    initVars(clear)
     deleteAll()
     drawAll()
}

function deleteAll()//alles auser das Array löschen
{
    const c = document.getElementById('sdl');
    const context = c.getContext('2d');

context.clearRect(0, 0, c.width, c.height);
}
/**
 * @param  {number} rows das ist die anzahl der zeilen
 * @param  {number} cols
 */
function make2DArray(rows, cols)//ein Array erstellen um die Infos zu übermitteln

{
    let x = [];
    for (let i = 0; i < rows; i++) {
      x[i] = [];
      for (let j = 0; j < cols; j++) {
        x[i][j] = [];
      }
    }
    return x;
  }
function startAutomatik()
{
    nev = true
    resetAutomatik()
}
function resetAutomatik()//loop um die generationen automatisch laufen zu lassen(ist stackbar)
{
    
    next()
    timer = setTimeout(resetAutomatik,250)
    
}
function stop()//den Loop in resetAutomatik zu stopen (wenn resetAutomatik stackt ist muss man mehr mahls auf stop drücken)
{ 
    {
            nev = false
            clearTimeout(timer);
            timer = 0;
            return nev
    }
}
var nev = false
document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==32) {
      
      if (nev == false)
      {
          startAutomatik()
      }else{
          //console.log("functionating")
          stop()
      }
  }
}

document.addEventListener("keydown", key, false);
function key(e)
{
    var keyCode = e.keyCode;
    if (keyCode == 82)
    {
        reset(false)
        //console.log("Hallo")
    }
}

document.addEventListener("keydown", keyEvent, false);
function keyEvent(e)
{
    var keyCode = e.keyCode;
    if (keyCode == 67)
    {
        reset(true)
        //console.log("Hallo")
    }
}
document.addEventListener("keydown", keyEvents, false);
function keyEvents(e)
{
    var keyCode = e.keyCode;
    if (keyCode == 78)
    {
        next()
        //console.log("Hallo")
    }
}