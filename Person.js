class Person extends GameObject {
    constructor(config) {
        super(config);
        //How many pixels to move when key pressed
        this.movingQuantity = 5;

        this.isPlayer = config.isPlayer || false;

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["x", -1],
            "right": ["x", 1],
        }

    }

    update(state) {
        this.updatePosition();

        if (this.isPlayer && this.movingQuantity == 0 && state.arrow) {
            this.direction = state.arrow;
            this.movingQuantity = 5;
        }
    }

    updatePosition() {
        if (this.movingQuantity > 0) {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingQuantity -= 1;
        }
    }
}