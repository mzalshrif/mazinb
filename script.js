function adata(){
    var date= new Date();
    var time= document.getElementById("set-time");
    time.innerHTML= date.getHours()+":"+ date.getMinutes()+":"+date.getSeconds();
    var data= document.getElementById("set-data");
    data.innerHTML = date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();     
    }
 setInterval(adata,100);
 onload=adata();

function gcolor(){
    var gcolor= document.getElementById("set-color").value;
localStorage.setItem("color",gcolor);
document.getElementById("time").style.background=localStorage.getItem("color");
document.getElementById("b").style.background=localStorage.getItem("color");
}
function scolor(){
    document.getElementById("color").value=localStorage.getItem("color");
    document.getElementById("time").style.background=localStorage.getItem("color");
document.getElementById("b").style.background=localStorage.getItem("color");
}
setInterval(scolor,100);