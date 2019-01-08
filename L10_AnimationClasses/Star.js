var L10_Animation;
(function (L10_Animation) {
    class Star {
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            L10_Animation.crc2.fillStyle = this.color;
            L10_Animation.crc2.strokeStyle = "#000000";
            L10_Animation.crc2.lineWidth = 2;
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.moveTo(this.x - 20, this.y + 10);
            L10_Animation.crc2.lineTo(this.x, this.y - 20);
            L10_Animation.crc2.lineTo(this.x + 20, this.y + 10);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.fill();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.moveTo(this.x - 20, this.y - 10);
            L10_Animation.crc2.lineTo(this.x + 20, this.y - 10);
            L10_Animation.crc2.lineTo(this.x, this.y + 20);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.fill();
            L10_Animation.crc2.stroke();
        }
    }
    L10_Animation.Star = Star;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Star.js.map