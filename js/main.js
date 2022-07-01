(window.addEventListener(('DOMContentLoaded'), () => {
    const burgerToggle = document.querySelector(".nav__burger");
    const navToggle = document.querySelector('.nav');


    const intro = document.querySelector(".intro");
    const header = document.querySelector(".header");

    const fas_items = document.querySelectorAll(".fas__item").forEach(x => x.hidden = true)


    // ActionCLassList
    const ActionCLassList = {
        addAction: "add",
        deleteAction: "remove"
    }

    function activeToggle(...args) {
        const [element, action, className] = args; 

        element.classList[action](className);
    }

    // Smooth scroll to link

    const linkList = document = document.querySelectorAll(".nav-link[href*='#']");
    
    linkList.forEach((x) => {
        x.addEventListener("click", (event) => {
            event.preventDefault();

            const linkHref = document.querySelector(x.getAttribute("href")).offsetTop

            // ScrollToBlock    
            window.scrollTo({
                top:  linkHref - (linkHref * 0.085),
                behavior: "smooth"
            })

            activeToggle(burgerToggle, deleteAction, "active");
            activeToggle(navToggle, deleteAction, "active");
        })
    })



    // Toggle

    burgerToggle.addEventListener("click", (event) => {
        event.preventDefault()
        const {addAction, deleteAction} = ActionCLassList


        !burgerToggle.classList.contains('active') ?

                (activeToggle(burgerToggle, addAction, "active"),
                    activeToggle(navToggle, addAction, "active"))
            :
                (activeToggle(burgerToggle, deleteAction, "active"),
                    activeToggle(navToggle, deleteAction, "active"))
    })  
    

    // FixedHeader

    function fixedHeader() {
        const {addAction, deleteAction} = ActionCLassList;

        if (window.scrollY >= intro.offsetHeight * 0.911) {
            activeToggle(header, addAction, "header__fixed")
        } else {
            activeToggle(header, deleteAction, "header__fixed")
        }

    }

    window.addEventListener('scroll', fixedHeader);
    
}))()