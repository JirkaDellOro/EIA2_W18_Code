var L11_Inheritance;
(function (L11_Inheritance) {
    class StarWithCircle extends L11_Inheritance.Star {
        constructor() {
            super();
            this.color = "#ff0000";
            this.radius = 5;
        }
        draw() {
            super.draw();
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L11_Inheritance.crc2.stroke();
        }
        move() {
            this.x += Math.random() * 8 - 4;
            this.y += Math.random() * 8 - 4;
        }
    }
    L11_Inheritance.StarWithCircle = StarWithCircle;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=StarWithCircle.js.map