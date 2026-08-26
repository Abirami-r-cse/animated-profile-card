
let button= document.getElementById("followBtn");
let themeBtn= document.getElementById("themeBtn");
let body=document.querySelector("body");
let role = document.querySelector(".role");
let roles = ["PSG iTech","CSE Student","Frontend Learner"];
let currentRole = 0;

setInterval(function(){
    role.textContent=roles[currentRole];
        currentRole+=1;
        if(currentRole === roles.length){
            currentRole = 0;
    }
},1500);
let saved = localStorage.getItem("theme");
if(saved === "dark"){
    body.classList.add("dark");
    themeBtn.textContent = "☀️ Light Mode";
}


function updateButton(text,className){
    button.textContent=text;
    button.classList.remove("following");
    button.classList.remove("request");
    if (className!==""){
        button.classList.add(className);
    }
}
button.addEventListener("click",function(){
    if(button.textContent==="Follow ⭐"){
       updateButton("Requested 📨","request");
       alert("Follow request sent to Abirami!");
    }
    else if(button.textContent==="Requested 📨"){
        updateButton("Following ☑️","following");
        alert("You are Following Abirami!");
    }
    else {
       updateButton("Follow ⭐","");
        alert("You unfollowed Abirami!")
    }
});
themeBtn.addEventListener("click",function(){
    body.classList.toggle("dark");
    let check= body.classList.contains("dark");
    if(check===true){
        localStorage.setItem("theme","dark");
        themeBtn.textContent = "☀️ Light Mode";
    }
    else{
        localStorage.setItem("theme","light");
        themeBtn.textContent = "🌙 Dark Mode";
    }
});



