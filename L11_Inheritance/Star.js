var L11_Inheritance;
(function (L11_Inheritance) {
    class Star {
        constructor() {
            this.init();
            this.color = "#00ff00";
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        init() {
            this.x = Math.random() * L11_Inheritance.crc2.canvas.width;
            this.y = Math.random() * L11_Inheritance.crc2.canvas.height;
            this.dx = Math.random() * 4 - 2;
            this.dy = Math.random() * 4 - 2;
        }
        draw() {
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.strokeStyle = "#000000";
            L11_Inheritance.crc2.lineWidth = 2;
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.moveTo(this.x - 20, this.y + 10);
            L11_Inheritance.crc2.lineTo(this.x, this.y - 20);
            L11_Inheritance.crc2.lineTo(this.x + 20, this.y + 10);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.fill();
            L11_Inheritance.crc2.stroke();
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.moveTo(this.x - 20, this.y - 10);
            L11_Inheritance.crc2.lineTo(this.x + 20, this.y - 10);
            L11_Inheritance.crc2.lineTo(this.x, this.y + 20);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.fill();
            L11_Inheritance.crc2.stroke();
        }
    }
    L11_Inheritance.Star = Star;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Star.js.map