// slick slider------
$('.slick-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
});

// scroll to top

let scroll_btn = document.querySelector(".scroll_top");
let scroll_pt = 200;
scroll_btn.classList.add("d-none");

window.addEventListener("scroll", () => {
    if (window.scrollY > scroll_pt) {
        scroll_btn.classList.remove("d-none");
    } else {
        scroll_btn.classList.add("d-none");
    }
    scroll_btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
