namespace L10_Animation {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let stars: Star[] = [];

    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        console.log(crc2);

        for (let i: number = 0; i < 20; i++) {
            let star: Star = new Star();
            star.x = Math.random() * crc2.canvas.width;
            star.y = Math.random() * crc2.canvas.height;
            star.dx = Math.random() * 4 - 2;
            star.dy = Math.random() * 4 - 2;
            star.color = "#00ff00";

            stars.push(star);
        }

        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i: number = 0; i < 20; i++) {
            let star: Star = stars[i];
            star.move();
            star.draw(); // keine Parameter erforderlich, denn der Stern weiß über sich Bescheid
        }

        console.log("Update");
    }
}