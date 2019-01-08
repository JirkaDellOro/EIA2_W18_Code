namespace L10_Animation {
    export class Star {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }
        
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y + 10);
            crc2.lineTo(this.x, this.y - 20);
            crc2.lineTo(this.x + 20, this.y + 10);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y - 10);
            crc2.lineTo(this.x + 20, this.y - 10);
            crc2.lineTo(this.x, this.y + 20);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }
    }
}