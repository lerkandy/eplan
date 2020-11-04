function make2DArray(cols, rows)
{
    let arr= new Array(cols);
    for(let i = 0;i<arr.length; i++)
    {
        arr[i]=new Array (rows);
    }
    return arr;
}
let grid;
let cols;
let rows;
let resolution=40;

function setup()
{   create Canvas(400,400)
    cols=width/resolution;
    rows=heigth/resolution;
    grid=make2DArray(10,10);
    for(let i=0; i<cols; i++)
    {
        for(let j=0; j<rows; j++)
        {  
           grid[i][j]= floor(random(2))
        }
    }
}
function draw()
{
    background(0);
    for(let i=0; i<cols; i++)
    {
        for(let j=0; j<rows; j++)
        {
            let x=i*resolution;
            let y=j*resolution;
            if(grid[i][j]==1)
            {
                fill(255)
                 Rect(x,y,resolution,resolution)
            }
           
        }
    }
}
