let display = document.getElementById("display");
function press(x){ display.value += x; }
function clr(){ display.value = ""; }
function del(){ display.value = display.value.slice(0,-1); }
function func(type){
let val = parseFloat(display.value);
if(type==='sin') display.value = Math.sin(val);
if(type==='cos') display.value = Math.cos(val);
if(type==='tan') display.value = Math.tan(val);
if(type==='sqrt') display.value = Math.sqrt(val);
}
function equal(){ display.value = eval(display.value); }