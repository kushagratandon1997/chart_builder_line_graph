var myCanvas = document.getElementsByTagName('canvas')[0],
    ctx = myCanvas.getContext('2d'),
    btnDraw = document.getElementById('draw'),
    inputs = document.getElementsByClassName('inputs')[0].getElementsByTagName('input'),
    addChart = document.getElementById('addChart'),
    btnReset = document.getElementById('reset'),
    labels = document.getElementsByTagName('ul')[0];

ctx.moveTo(0, myCanvas.height);
ctx.lineWidth = 3;
ctx.font = '10px Tahoma';

btnDraw.onclick = function () 
{
    mainFunction();
}
btnReset.onclick = function() {
    resetChart();
}   

function resetChart() 
{
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    for ( var d = 0; d<labels.getElementsByTagName('li').length; d++) {
        labels.removeChild(labels.getElementsByTagName('li')[d]);
    }
}

function mainFunction() 
{
    if (isNaN(inputs[1].value) || isNaN(inputs[2].value)) {
        var alertDiv = document.createElement('div')
        alertDiv.setAttribute('class', 'alert');
        document.getElementsByClassName('inputs')[0].appendChild(alertDiv);
        alertDiv.innerHTML = "Please Enter a Numeric Value";
        setTimeout(clearAlert, 3000);
        clearInputs();
    } else {
        drawChart();
    }
}    
function clearAlert() {
    var alertDiv = document.getElementsByClassName('alert')[0];
    document.getElementsByClassName('inputs')[0].removeChild(alertDiv);
}
function clearInputs() {
    for (var i=0;i<inputs.length;i++) {
        inputs[i].value="";
    };
}
function drawChart() 
{
    var label = document.createElement('li'),
        x = inputs[1].value,
        y = inputs[2].value,
        z = inputs[3].value;
        ctx.strokeStyle = z;
        ctx.fillStyle = z;
        label.innerHTML = inputs[0].value;
        label.style.left = x + 'px';
        labels.appendChild(label);
        ctx.lineTo(x, myCanvas.height-y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x,myCanvas.height-y,5,0,Math.PI*2);
        ctx.fill();
        var X = Number(x) + 6,
        Y=myCanvas.height - y + 6;
        ctx.fillText("(" + x + "," + y + ")", X, Y);
        ctx.moveTo(x,myCanvas.height-y);
        clearInputs();
        }