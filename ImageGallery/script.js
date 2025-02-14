let scroll = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scroll.addEventListener("wheel", (event) => {
    event.preventDefault();
    scroll.scrollLeft += event.deltaY;
    scroll.computedStyleMap.scrollBehavior='auto';

});

nextBtn.addEventListener("click", () => {
    scroll.style.scrollBehavior='smooth';
    scroll.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scroll.style.scrollBehavior='smooth';
    scroll.scrollLeft -= 900;
});