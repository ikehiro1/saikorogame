function Saikoro(){
    let saikoro = Math.floor(Math.random()*6)+1;
    document.getElementById("result").innerHTML = saikoro;
    document.getElementById("sainome").src = saikoro + ".jpg";
}
