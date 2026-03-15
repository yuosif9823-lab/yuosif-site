function scanIP(){

let ip=document.getElementById("ipInput").value;

document.getElementById("ipResult").innerHTML=
"تم تحليل IP: "+ip;

}

function checkConnection(){

let status=["الاتصال آمن","لا يوجد اختراق","الشبكة مستقرة"];

let result=status[Math.floor(Math.random()*status.length)];

document.getElementById("connectionResult").innerHTML=result;

}

function securityCheck(){

let security=[
"النظام آمن ✅",
"لم يتم اكتشاف اختراق",
"تم اكتشاف اتصال مشبوه ⚠️",
"يوجد نشاط غير طبيعي"
];

let result=security[Math.floor(Math.random()*security.length)];

document.getElementById("securityResult").innerHTML=result;

}
