var adDiv;
var step = 0;

function preloadImages(srcs, imgs, callback) {
    var img;
    var remaining = srcs.length;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.onload = function () {
            --remaining;
            if (remaining <= 0) {
                callback();
            }
        };
        img.src = srcs[i];
        imgs.push(img);
    }
}

var imageSrcs = [
    "bg1.jpg",
    "logo.png",
    "bg2.png",
    "txt2.png",
    "txt3.png",
    "txt3a.png",
];
var images = [];
function init_preload() {
    preloadImages(imageSrcs, images, startAd);
}

function startAd() {
    addEventListeners();
    init_banner();
}

function init_banner() {
    var delay = 0;
    setTimeout(function () {
        document.getElementById("bg1").classList.add("zoom");
        document.getElementById("bg2").classList.add("visible");
    }, delay);

    delay += 500;
    setTimeout(function () {
        document.getElementById("txt2").classList.add("visible");
    }, delay);

    delay += 4000;

    setTimeout(function () {
        document.getElementById("txt2").classList.remove("visible");
    }, delay);

    delay += 250;

    setTimeout(function () {
        document.getElementById("txt3").classList.add("visible");
    }, delay);

    delay += 5000;

    setTimeout(function () {
        document.getElementById("txt3").classList.remove("visible");
    }, delay);

    delay += 300;

    setTimeout(function () {
        document.getElementById("bg1").classList.remove("visible");
        document.getElementById("bg3").classList.add("visible");
    }, delay);
    delay += 250;

    setTimeout(function () {
        document.getElementById("txt3a").classList.add("visible");
        document.getElementById("buttons").classList.remove("op0");
    }, delay);
    
    delay += 5000;
    setTimeout(function () {
        document.getElementById("txt3").classList.remove("visible");
        document.getElementById("txt3a").classList.remove("visible");
        document.getElementById("bg1").classList.add("visible");
        document.getElementById("bg3").classList.remove("visible");
        document.getElementById("buttons").classList.add("op0");
    }, delay);

    setTimeout(function () {
        init_banner();
    }, delay + 200);
}

function addEventListeners() {
    document.getElementById("buttons").addEventListener("click", allclick);
    document.getElementById("cta1").addEventListener("click", click_cta1);
    document.getElementById("ver").addEventListener("click", ver_legal);
    document.getElementById("close").addEventListener("click", close_legal);
}

function allclick() {
    Enabler.exit("allclick");
}
function click_cta1(e) {
    e.preventDefault();
    e.stopPropagation();
    Enabler.exit("click_cta_descubrelo");
}

function ver_legal(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("legalTxt").classList.add("visible");
}
function close_legal(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("legalTxt").classList.remove("visible");
}

window.addEventListener("load", init_preload);

document.addEventListener("visibilitychange", function () {
    location.reload();
});
