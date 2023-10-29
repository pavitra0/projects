let istatus = document.querySelector("h5")

let btn = document.querySelector("#add")

// let remove = document.querySelector("#remove")
let isopen = 0
btn.addEventListener("click", ()=>{
    if(isopen ==0){
    istatus.innerHTML = "Blue Amplification"
    btn.innerHTML="Remove"
    isopen = 1
    }else{
        istatus.innerHTML = "Seal"
        isopen = 0
        btn.innerHTML="Add Curse"
    }
})
// remove.addEventListener("click",()=>{
//     istatus.innerHTML =  "Strong"
// })