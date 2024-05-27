document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function checkScroll() {
        sections.forEach(section => {
            const distance = section.getBoundingClientRect().top - window.innerHeight;

            if (distance < 0) {
                section.classList.add("active");
            }
        });
    }


    checkScroll();

  
    document.addEventListener("scroll", checkScroll);
});
