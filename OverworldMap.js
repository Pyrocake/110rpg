class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.drawnBelow = new Image();
        this.drawnBelow.src = config.drawnBelowSrc;
        this.drawnAbove = new Image();
        this.drawnAbove.src = config.drawnAboveSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.drawnBelow, 0,0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.drawnAbove, 0,0)
    }
}

window.OverworldMaps = {
    QASmoke: {
        drawnBelowSrc: "/images/map_placeholder.png",
        drawnAboveSrc: "/images/map_placeholder_above.png",
        gameObjects: {
            hero: new GameObject({
                x: utils.withGrid(1),
                y: utils.withGrid(4),
                src: "/images/hero_placeholder.png"
            }),
            hero2: new GameObject({
                x: utils.withGrid(5),
                y: utils.withGrid(9),
                src: "/images/hero2.png"
            })
        }
    },
    QASmoke2: {
        drawnBelowSrc: "/images/map_placeholder2.png",
        drawnAboveSrc: "/images/map_placeholder_above.png",
        gameObjects: {
            hero: new GameObject({
                x: utils.withGrid(4),
                y: utils.withGrid(6),
                src: "/images/hero_placeholder.png"
            }),
            hero2: new GameObject({
                x: utils.withGrid(8),
                y: utils.withGrid(8),
                src: "/images/hero2.png"
            })
        }
    }
}