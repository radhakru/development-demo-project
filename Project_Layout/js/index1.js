//toggle botton script
let btn=document.querySelector("#btn1");
let colorchange="black";

btn.addEventListener("click",() => {
    if(colorchange ==="black") 
    {   
        colorchange="white";
       document.querySelector("body").style.backgroundColor="black";
    } 
    
    else{
        colorchange="black";
    }
    console.log(colorchange);
   
});
