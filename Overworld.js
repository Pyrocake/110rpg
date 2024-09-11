class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        const step = () => {

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.map.drawLowerImage(this.ctx);
            
            //Draw Game Objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                })
                object.sprite.draw(this.ctx);
            })
  
            this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.QASmoke);

        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.directionInput.direction;

        console.log("Game loop initializing.");
        this.startGameLoop();

        console.log("Overworld initialization started.", this);

        
    }
}