class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        console.log("Map initialization started.", this);

        const map = new Image();
        map.onload = () => {
            this.ctx.drawImage(map, 0, 0)
        };
        map.src = "/images/placeholdermap.png";

        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(hero, 65, 50)
        };
        hero.src = "/images/hero_placeholder.png";
    }
}