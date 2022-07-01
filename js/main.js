(() => {
    const burgerToggle = document.querySelector(".nav__burger");
    const navToggle = document.querySelector('.nav');

    const fas_items = document.querySelectorAll(".fas__item").forEach(x => x.hidden = true)

    burgerToggle.addEventListener("click", (event) => {
        event.preventDefault()


        !burgerToggle.classList.contains('active') ?
                // console.log(1)
                (burgerToggle.classList.add("active"),
                navToggle.classList.add("active")) 
            :
                // console.log(2);
                (burgerToggle.classList.remove("active"),
                navToggle.classList.remove("active"))
    })  
    
    
})()