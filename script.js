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

}

function securityCheck(){

let result=["آمن ✅","نشاط غير طبيعي ⚠️","لم يتم اكتشاف اختراق"];

let random=result[Math.floor(Math.random()*result.length)];

document.getElementById("securityResult").innerHTML=random;

}
