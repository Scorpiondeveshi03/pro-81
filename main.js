var mouseEvent= "empty";
var lpox,lpoy;
canvas = document.getElementById("myCanvas");


ctx= canvas.getContext("2d");


canvas.addEventListener("mousedown", my_mousedown);



function my_mousedown(e)
{
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x , mouse_y); 
}



function circle(x, y){
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.arc(x, y ,30 ,0 ,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.arc(x+50, y ,30 ,0 ,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.arc(x+100, y ,30 ,0 ,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(x+20, y+30 ,30 ,0 ,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.arc(x+85, y+30 ,30 ,0 ,2*Math.PI);
    ctx.stroke();
}