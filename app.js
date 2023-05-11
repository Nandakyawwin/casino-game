var image = document.querySelector(".casino-gif"),
    button = document.querySelector(".pause");

if (image) {
    button.onclick = function () {
        image.pause();
    };
}