class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        console.log("Overworld initialization started.", this);

        const map = new Image();
        map.onload = () => {
            this.ctx.drawImage(map, 0, 0)
        };
        map.src = "/images/map_placeholder.png";

        // Place Game Objects
        const hero = new GameObject({
            x: 1,
            y: 4,
            src: "/images/hero_placeholder.png"
        })

        const hero2 = new GameObject({
            x: 5,
            y: 9,
            src: "/images/hero2.png"
        })

        //TODO Remove on creation of game loop
        setTimeout(() => {
            hero.sprite.draw(this.ctx);
            hero2.sprite.draw(this.ctx);
        }, 200)
    }
}