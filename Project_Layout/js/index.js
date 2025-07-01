let home=document.querySelector(".home");
home.onclick = (e) =>{
    console.log(e);
    console.log(e.target);
    console.log(e.type);
};
const handler3=()=>{
    console.log("button was clicked handler2");};
home.addEventListener("click", ()=>{
    console.log("button was clicked - handler1");
});



home.addEventListener("click",handler3);
home.removeEventListener("click",handler3);



//toggle botton script
// let btn=document.getElementById("#btn1");
// let colorchage="black";
// const dark_mode=()=>{
//     document.querySelector("body").style.backgroundColor="black";
// };
// const white_mode=()=>{
//     document.querySelector("body").style.backgroundColor="white";
// };

// btn.addEventListener("click",() => {
//     if(colorchage==="black") 
//     {
//         btn.addEventListener("click",dark_mode);
//         colorchage="white";
//     }
//     else{
//          btn.addEventListener("click",white);
//     }
// });



