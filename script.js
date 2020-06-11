
function cir(event){
    var x = event.clientX;
    var y = event.clientY;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill(); 
}

