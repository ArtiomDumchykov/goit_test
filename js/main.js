(() => {
    const burgerToggle = document.querySelector(".nav__burger");
    // console.log(111)

    burgerToggle.addEventListener("click", (event) => {
        event.preventDefault()

        console.log(123);
        // burgerToggle.classList.toggle('active');
        !burgerToggle.classList.contains('active') ?
                // console.log(1)
                burgerToggle.classList.add("active") 
            :
                // console.log(2);
                burgerToggle.classList.remove("active")
    })         
})()