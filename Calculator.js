// Get canvas
var mainCanvas = document.getElementById("mainCanvas");
var ctx = mainCanvas.getContext("2d");

// Program data
var fps = 60;

// Calculator data
var commandHistory = [];
var currentCommand = "";
var variables = {};

Initialize();
setInterval(Loop, 1000 / fps);

function Initialize()
{
    ctx.font = "20px courier new";
    ctx.textBaseline = "bottom";
}

function Loop()
{
    window.addEventListener('keydown', GetPressedKey(e), false);

    Update();
    Draw();
}

function Update()
{

}

function Draw()
{
    ctx.fillStyle = "#ffffff";
    ctx.fillText(">", 10, Window.height - 10);
    ctx.fillText(currentCommand, 40, Window.height - 10);
}

function GetPressedKey(e)
{

}