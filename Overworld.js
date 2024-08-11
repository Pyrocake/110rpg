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
        map.src = "/images/map_placeholder.png";

        

        //offset for feet positioning
        const offsetX = 9;
        const offsetY = 5;
        //allows coordinate based positioning
        const gridSize = 16;

        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(shadow, (1 * gridSize) - offsetX, (4 * gridSize) - offsetY)
        };
        shadow.src = "/images/shadow_placeholder.png";

        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(hero, (1 * gridSize) - offsetX, (4 * gridSize) - offsetY)
        };
        hero.src = "/images/hero_placeholder.png";
    }
}