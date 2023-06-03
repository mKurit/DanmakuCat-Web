export const sketch = (p) => {

    p.setup = () => {
        if (p.windowHeight < p.windowWidth) {
            p.createCanvas(p.windowHeight - 10, p.windowHeight - 10);
        } else {
            p.createCanvas(p.windowWidth - 10, p.windowWidth - 10);
        }
    }

    window.addEventListener("resize", () => {
        if (p.windowHeight < p.windowWidth) {
            p.resizeCanvas(p.windowHeight - 10, p.windowHeight - 10);
        } else {
            p.resizeCanvas(p.windowWidth - 10, p.windowWidth - 10);
        }
    })

    p.draw = () => {
        p.background('#000000');
        p.fill(255, 255, 255);
        p.textSize(32);
        p.text('word', 10, 30);
    }
};