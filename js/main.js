(() => {
    const burgerToggle = document.querySelector(".nav__burger");
    console.log(111)

    burgerToggle.addEventListener("click", (event) => {
        event.preventDefault()

        console.log(123);
        burgerToggle.classList.toggle('active')
    })
})()