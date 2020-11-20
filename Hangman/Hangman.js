var bildnummer = 1
var wort //= ["A","P","F","E","L","S","A","F","T"]
var aktuellesWort //= ["_", "_", "_", "_", "_","_", "_", "_", "_"]


function setzeGeheimesWort(neuesGeheimesWort)
{
    wort = new Array(neuesGeheimesWort.length)
    aktuellesWort = new Array(neuesGeheimesWort.length)

    for(var i = 0; i < neuesGeheimesWort.length; i++)
    {  
        wort[i] = neuesGeheimesWort[i]
        aktuellesWort[i] = "_"
    }
}


function next()
{
    if(bildnummer < 13)
    {
 
        bildnummer++
        var neuerBildName = "hangman_" + bildnummer + ".png"
            bildElement = document.getElementById("bild")
            bild.src = neuerBildName
        if( bildnummer == 12)
        {
            alert("you Lost")
            restart()
       
        }
    }
    else
    {}
    
    //alert (bildnummer)
}
function restart()
{
    var reset = "hangman_1.png"
    bildElement = document.getElementById("bild")
    bild.src = reset
    bildnummer = 1

    setzeGeheimesWort("Wurst")

    zeigeAktuellesWort()
}
function ok()
{
    var element = document.getElementById("eingabe")
    var eingabe = element.value
    var kommtVor = eingabeKommtVor(eingabe, wort)
    var anzahlebuchstaben = buchstabenanzahl()
    if(kommtVor)
    {
        for(var i = 0; i < anzahlebuchstaben; i++)
        {  
            if(wort[i] == eingabe)
            {
                aktuellesWort[i] = wort[i];
            }
            if(wortStimmt())
            {
                alert("You Won")
                restart()
            }
        }
        zeigeAktuellesWort()
    }
    else
    {
        next()
    }
    console.log( aktuellesWort )
}
function buchstabenanzahl()
{
    return    wort.length
    
}
function eingabeKommtVor(eingabe, wort)
{
    for(var i = 0; i < buchstabenanzahl(); i++)
        {  
            if(wort[i] == eingabe)
            {
                return true
            }
        }
    return false
}
function zeigeAktuellesWort()
{
    var ausgabe = ""
    for(var i = 0; i < buchstabenanzahl(); i++)
        {  
            ausgabe += aktuellesWort[i]
            ausgabe += " "
        }
    var el = document.getElementById("wort")
    el.innerHTML = ausgabe
}
function wortStimmt()
{
    for(var i = 0; i < buchstabenanzahl(); i++)
        {  
            if(wort[i] != aktuellesWort[i])
            {
                return false
            }
        }
    return true
}