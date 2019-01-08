var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    let fps = 25;
    let stars = [];
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = canvas.getContext("2d");
        console.log(L10_Animation.crc2);
        for (let i = 0; i < 20; i++) {
            let star = new L10_Animation.Star();
            star.x = Math.random() * L10_Animation.crc2.canvas.width;
            star.y = Math.random() * L10_Animation.crc2.canvas.height;
            star.dx = Math.random() * 4 - 2;
            star.dy = Math.random() * 4 - 2;
            star.color = "#00ff00";
            stars.push(star);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        L10_Animation.crc2.clearRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        for (let i = 0; i < 20; i++) {
            let star = stars[i];
            star.move();
            star.draw(); // keine Parameter erforderlich, denn der Stern weiß über sich Bescheid
        }
        console.log("Update");
    }
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Main.js.map