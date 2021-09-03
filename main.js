ctx = document.getElementById("myCanvas").getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "darkgrey";
ctx.lineWidth = 5;
ctx.rect(200, 150, 400, 200);
ctx.stroke();
//blue
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(300, 220, 40, 0, Math.PI*2);
ctx.stroke();
//yellow
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(350, 260, 40, 0, Math.PI*2);
ctx.stroke();
//black
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(400, 220, 40, 0, Math.PI*2);
ctx.stroke();
//green
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(450, 260, 40, 0, Math.PI*2);
ctx.stroke();
//red
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(500, 220, 40, 0, Math.PI*2);
ctx.stroke();