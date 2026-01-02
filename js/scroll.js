const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 400,
    reset: true
})
sr.reveal(' #info', {delay:200, origin:'left'})
sr.reveal(' #pfp', {delay:200, origin:'right'})
sr.reveal(' #topics-counter', {delay:500, origin:'top'})
sr.reveal(' #xp-counter', {delay:500, origin:'top'})


sr.reveal(' #aviso', {delay:200, origin:'top'})
sr.reveal(' #greetings', {delay:200, origin:'left'})
sr.reveal(' #createBtn', {delay:200, origin:'left'})
sr.reveal(' #searchbar', {delay:200, origin:'right'})
sr.reveal(' #searchBtn', {delay:200, origin:'right'})
sr.reveal(' #post', {delay:200, origin:'top'})



const container = document.querySelector("body");
const navBar = document.getElementById("navBar");
let info = document.getElementById("info");


container.addEventListener("scroll", () => {
    if(container.scrollTop > 30){
        container.classList.add("scrolled")
        navBar.style.display = "none"
         info.style.display = "none"

    } else{
        container.classList.remove("scrolled");        
        navBar.style.display = "flex"
        info.style.display = "block"
    }


})