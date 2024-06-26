var menuBtn = document.querySelector(".ri-menu-line");
var qty = 0
var nav = document.querySelector(".nav-center")
menuBtn.addEventListener("click", function (){
    
     
    if (qty == 0){
    nav.style.top= "80px";
    qty +=1;
    }
    else if(qty == 1){
nav.style.top = "-500px";
  qty = 0;
    }
    
    console.log(menuBtn)
})
