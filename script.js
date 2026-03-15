let map=L.map('map').setView([20,0],2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:19
}).addTo(map);

async function scanIP(){

let ip=document.getElementById("ipInput").value;

let response=await fetch("https://ipapi.co/"+ip+"/json/");

let data=await response.json();

document.getElementById("ipResult").innerHTML=
"الدولة: "+data.country_name+
"<br>المدينة: "+data.city+
"<br>مزود الانترنت: "+data.org;

}

async function locateIP(){

let ip=document.getElementById("ipInput").value;

let response=await fetch("https://ipapi.co/"+ip+"/json/");

let data=await response.json();

document.getElementById("locationResult").innerHTML=
"الموقع التقريبي: "+data.city+" - "+data.country_name;

map.setView([data.latitude,data.longitude],10);

L.marker([data.latitude,data.longitude]).addTo(map);

}
