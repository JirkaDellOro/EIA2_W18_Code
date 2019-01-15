var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    let fps = 25;
    let stars = [];
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        for (let i = 0; i < 20; i++) {
            let star;
            if (i > 9)
                star = new L11_Inheritance.StarWithCircle();
            else
                star = new L11_Inheritance.Star();
            stars.push(star);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        for (let i = 0; i < 20; i++) {
            let star = stars[i];
            star.move();
            star.draw(); // keine Parameter erforderlich, denn der Stern weiß über sich Bescheid
        }
        //console.log("Update");
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Main.js.map