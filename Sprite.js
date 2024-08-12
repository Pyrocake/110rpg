class Sprite {
    constructor(config) {

        // Set up image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        // Shadow
        this.shadow = new Image();
        this.useShadow = true; // hardcoded, change if something has a baked in shadow or no shadow
        if (this.useShadow) {
            this.shadow.src = "/images/shadow_placeholder.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }


        // Config anim and initial state
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        // Ref game obj
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x - 9 //9 is offset for feet
        const y = this.gameObject.y - 5 //5 is offset

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)
        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32,
            x, y,
            32,32
        )
    }
}