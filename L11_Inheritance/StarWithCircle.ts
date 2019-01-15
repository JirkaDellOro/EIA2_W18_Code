namespace L11_Inheritance {
    export class StarWithCircle extends Star {
        radius: number;

        constructor() {
            super();
            this.color = "#ff0000";
            this.radius = 5;
        }

        draw(): void {
            super.draw();
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.stroke();
        }

        move(): void {
            this.x += Math.random() * 8 - 4;
            this.y += Math.random() * 8 - 4;
        }
    }
}