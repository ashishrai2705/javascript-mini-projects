function toggleMode(){

let body = document.body;

body.classList.toggle("dark");

if(body.classList.contains("dark")){
localStorage.setItem("mode","dark");
}else{
localStorage.setItem("mode","light");
}

}

window.onload = function(){

let savedMode = localStorage.getItem("mode");

if(savedMode === "dark"){
document.body.classList.add("dark");
}

}