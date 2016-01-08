var grid_offsetx = 4;
var grid_offsety = 4;
var grid_boxsize = 9;
var grid_rows = 64;
var grid_columns = 64;
canvas.addEventListener('click', handleClick);
c.addEventListener('mousedown', down);
c.addEventListener('mouseup', up);

//displays the canvas with a grid insidex
function init () {
    var context = document.getElementById("grid").getContext("2d");
    for (var x=0; x<=grid_columns; x++) {
        context.moveTo(x*grid_boxsize+0.5, 0);
        context.lineTo(x*grid_boxsize+0.5, grid_rows*grid_boxsize+1);
    }
    for (var y=0; y<=grid_rows; y++) {
        context.moveTo(0, y*grid_boxsize+0.5);
        context.lineTo(grid_columns*grid_boxsize, y*grid_boxsize+0.5);
    }
    context.strokeStyle = "#000000";
    context.stroke();
	document.getElementById("grid").onclick = color;
}

//is called from init when the ganvas is clicked
function color () {
	var grid = document.getElementById("grid");
//figures out where the click was
    var x = Math.floor((event.clientX - grid_offsetx)/grid_boxsize);
	var y = Math.floor((event.clientY - grid_offsety)/grid_boxsize);
    //alert(x + ", " + y);
// checks to make sure the click is inside of the grid
    if (!(x>63 || y>63)) {
        var c = document.getElementById("grid").getContext("2d");
        c.beginPath();
        c.fillStyle = "#000000";
        c.lineWidth = 1;
        c.strokeStyle = "#000000";
        c.rect(x*grid_boxsize, y*grid_boxsize, grid_boxsize, grid_boxsize);
        c.fill();
        c.stroke();
        c.closePath();
    }
}

function addHandler() {
        canvas.addEventListener("mousemove", color);
};

function removeHandler() {
        canvas.removeEventListener("mousemove", color);
};

//when the play button is clicked this function will be executed it causes the canvas to start checking the surrounding cells
function play() {
    
}

