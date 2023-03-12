

function makeGrayAndBigger(img) {
    img.style.filter = "grayscale(40%)";
    img.classList.add("bigger");
}

function makeOriginalAndNormal(img) {
    img.style.filter = "none";
    img.classList.remove("bigger");
}

