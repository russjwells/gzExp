$( document ).ready(function() {

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var circles = [];

    var draw = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext) {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fillStyle = fillcolor;
        context.fill();
        context.lineWidth = linewidth;
        context.strokeStyle = strokestyle;
        context.stroke();
        
        context.fillStyle = fontcolor;
        context.textAlign = textalign;
        context.font = fonttype;
        
        context.fillText(filltext, x, y);    
    };

    var Circle = function(x, y, radius) {
        this.left = x - radius;
        this.top = y - radius;
        this.right = x + radius;
        this.bottom = y + radius;
    };

    var drawCircle = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext, circles) {
        draw(context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext);
        var circle = new Circle(x, y, radius);
        circles.push(circle);  
    };

    drawCircle(context, 300, canvas.height / 2, "rgba(255, 191, 96, 0.3)", 40, 1, "#fff", "white", "center", "bold 8px Lato", "1", circles);
    drawCircle(context, 600, canvas.height / 3, "rgba(52, 246, 255, 0.3)", 50, 1, "#fff", "white", "center", "bold 8px Lato", "2", circles);

    $('#myCanvas').click(function (e) {
        var clickedX = e.pageX - this.offsetLeft;
        var clickedY = e.pageY - this.offsetTop;
        
        for (var i = 0; i < circles.length; i++) {
            if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
                alert('clicked number ' + (i + 1));
            }
        }
    });

});