
// faq code-----------------------------------
let accordian = document.querySelectorAll(".accordian");
document.querySelector(".acc_sub_img").style.display = "block";
document.querySelector(".acc_add_img").style.display = "none";
document.querySelector(".accordian_hidden_text").classList.add("show")

accordian.forEach((items) => {
    let subImg = items.querySelector(".acc_sub_img");
    let addImg = items.querySelector(".acc_add_img");
    let hiddenText = items.querySelector(".accordian_hidden_text");
    let clickPart = items.querySelector(".accordion-click-part");

    clickPart.addEventListener("click", () => {
        let hiddenTextDisplay = window.getComputedStyle(hiddenText).maxHeight;

        accordian.forEach((otherItems) => {
            let otherSubImg = otherItems.querySelector(".acc_sub_img");
            let otherAddImg = otherItems.querySelector(".acc_add_img");
            let otherHiddenText = otherItems.querySelector(".accordian_hidden_text");

            if (otherItems !== items) {
                otherAddImg.style.display = "block";
                otherSubImg.style.display = "none";
                otherHiddenText.classList.remove("show");
            }
        });

        if (hiddenTextDisplay === "0px") {
            addImg.style.display = "none";
            subImg.style.display = "block";
            hiddenText.classList.add("show");
        } else {
            addImg.style.display = "block";
            subImg.style.display = "none";
            hiddenText.classList.remove("show");
        }
    });
});

// slick slider------
$('.slick-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
});
