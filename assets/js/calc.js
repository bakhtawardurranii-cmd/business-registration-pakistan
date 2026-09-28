(function(){
var S={
2027:[[0,0,0],[600000,0,.01],[1200000,6000,.11],[2200000,116000,.20],[3200000,316000,.25],[4100000,541000,.29],[5600000,976000,.32],[7000000,1424000,.35]],
2026:[[0,0,0],[600000,0,.01],[1200000,6000,.11],[2200000,116000,.23],[3200000,346000,.30],[4100000,616000,.35]]
};
function tax(y,ty){
var s=S[ty],t=0,i;
for(i=s.length-1;i>=0;i--){if(y>s[i][0]){t=s[i][1]+s[i][2]*(y-s[i][0]);break}}
if(ty==="2026"&&y>10000000){t=t*1.09}
return Math.round(t)
}
var f=document.getElementById("calc");
if(!f)return;
var nf=new Intl.NumberFormat("en-PK");
function rs(n){return "Rs "+nf.format(Math.round(n))}
f.addEventListener("submit",function(e){
e.preventDefault();
var a=parseFloat(document.getElementById("amt").value)||0;
var per=document.getElementById("per").value;
var ty=document.getElementById("ty").value;
var y=per==="m"?a*12:a;
var t=tax(y,ty);
document.getElementById("o-y").textContent=rs(y);
document.getElementById("o-t").textContent=rs(t);
document.getElementById("o-m").textContent=rs(t/12);
document.getElementById("o-n").textContent=rs((y-t)/12);
document.getElementById("o-r").textContent=y>0?(t/y*100).toFixed(2)+"%":"0%";
document.getElementById("out").hidden=false
})
})();
