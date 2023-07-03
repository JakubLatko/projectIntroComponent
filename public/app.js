const navList = document.querySelector(".navList")
const hamIcon = document.querySelector(".hamburgerIcon")
const hamBtn = document.querySelector(".hamburgerButton")


hamBtn.addEventListener("click", ()=>{
    if(navList.ariaExpanded == "true"){
        navList.classList.add("hidden")
        navList.setAttribute("aria-expanded", false)
    } else if (navList.ariaExpanded == "false"){
        navList.classList.remove("hidden")
        navList.setAttribute("aria-expanded", true)
    }
})
