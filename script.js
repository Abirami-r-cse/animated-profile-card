
let button= document.getElementById("followBtn");
let themeBtn= document.getElementById("themeBtn");
let body=document.querySelector("body");
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
});



