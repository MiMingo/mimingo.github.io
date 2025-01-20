function getRandomCoordinate() {
    return {
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
    };
}
function getRandomImage() {
    var filenames = [
        "bee-heart-tulip.png",
        "grass-1.png",
        "orange-tulip.png",
        "pink-petal.png",
        "worm-in-the-grass.png",
        "yellow-petal.png",
    ];
    var randomFilename = filenames[Math.floor(Math.random() * filenames.length)];
    return {
        filename: randomFilename,
    };
}
function paintRandomImage() {
    var _a, _b;
    var canvas = (_b = (_a = document.getElementsByTagName("canvas")) === null || _a === void 0 ? void 0 : _a[0].getContext("2d")) !== null && _b !== void 0 ? _b : null;
    if (!canvas)
        return;
    var image = getRandomImage();
    var htmlImage = new Image();
    htmlImage.src = "img/".concat(image.filename);
    var coordinate = getRandomCoordinate();
    htmlImage.onload = function () {
        canvas.moveTo(0, 0);
        canvas.drawImage(htmlImage, coordinate.x, coordinate.y);
    };
}
function setupCanvas() {
    var _a, _b;
    var canvas = (_b = (_a = document.getElementsByTagName("canvas")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    if (!canvas)
        return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function onLoad() {
    setupCanvas();
    window.addEventListener("resize", setupCanvas);
    document
        .getElementById("painter")
        .addEventListener("click", function () { return paintRandomImage(); });
}
