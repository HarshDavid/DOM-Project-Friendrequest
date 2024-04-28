var wrt = document.querySelector("h2")
var btn = document.querySelector("button")
let check = 0

btn.addEventListener("click",function(){
   if (check == 0) {
       wrt.innerHTML = "Friend"
       wrt.style.color = "green"
       btn.innerHTML="Remove friend"
       check = 1
   } else {
       wrt.innerHTML = "Stranger"
       wrt.style.color = "red"
       check = 0
       btn.innerHTML = "Add friend"
    
   }
})