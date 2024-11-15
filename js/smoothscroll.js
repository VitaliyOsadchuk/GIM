document.addEventListener("DOMContentLoaded", function () {
    // всі посилання в меню
    const menuLinks = document.querySelectorAll("nav .menu a");

    // обробник кліку для кожного посилання
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetUrl = link.getAttribute("href");
            // оточний URL 
            const currentUrl = window.location.pathname;

            //URL == з поточним, то smooth scroll
            if (targetUrl === currentUrl || targetUrl === "") {
                event.preventDefault(); // без переходу

                // scroll
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    });
});
