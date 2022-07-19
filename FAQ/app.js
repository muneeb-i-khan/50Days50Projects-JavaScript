const change = document.querySelectorAll(".faq-toggle");

change.forEach((c) => {
    c.addEventListener("click", ()=> {
        c.parentNode.classList.toggle("active");
    });
}); 