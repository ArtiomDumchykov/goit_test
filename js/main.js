(window.addEventListener(('DOMContentLoaded'), () => {
    const burgerToggle = document.querySelector(".nav__burger");
    const navToggle = document.querySelector('.nav');


    const intro = document.querySelector(".intro");
    const header = document.querySelector(".header");

    const actionEventListenerUtils = {
        addAction: "add",
        deleteAction: "remove"
      }


    const fas_items = document.querySelectorAll(".fas__item").forEach(x => x.hidden = true)

    // Smooth scroll to link

    const linkList = document = document.querySelectorAll(".nav-link[href*='#']");
    
    linkList.forEach((x) => {
        x.addEventListener("click", (event) => {
            event.preventDefault();

            const {addAction, deleteAction} = actionEventListenerUtils;

            const linkHref = x.getAttribute("href");
            console.log(linkHref);
            document.querySelector(linkHref).scrollIntoView({
                behavior: "smooth",
                block: 'start',
            })

            activeToggle(burgerToggle, deleteAction, "active");
            activeToggle(navToggle, deleteAction, "active");
        })
    })

    // Toggle

    

    function activeToggle(...args) {
        const [element, action, className] = args; 

        element.classList[action](className);
    }


    burgerToggle.addEventListener("click", (event) => {
        event.preventDefault()
        const {addAction, deleteAction} = actionEventListenerUtils


        !burgerToggle.classList.contains('active') ?

                (activeToggle(burgerToggle, addAction, "active"),
                    activeToggle(navToggle, addAction, "active"))
            :
                (activeToggle(burgerToggle, deleteAction, "active"),
                    activeToggle(navToggle, deleteAction, "active"))
    })  
    

    // FixedHeader

    function fixedHeader() {
        const {addAction, deleteAction} = actionEventListenerUtils;

        if (window.scrollY >= intro.offsetHeight * 0.915) {
            activeToggle(header, addAction, "header__fixed")
        } else {
            activeToggle(header, deleteAction, "header__fixed")
        }

    }

    window.addEventListener('scroll', fixedHeader);
    
}))()