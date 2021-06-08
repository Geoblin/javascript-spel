class Player extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 18;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
    }

    update() {
        if (this.game.keys["d"]) {
            this.x += 1
        }
        if (this.game.keys["a"]){
            this.x -= 1
        }
        if (this.game.keys["w"]){
            this.y -= 1
        }
        if (this.game.keys["s"]){
            this.y += 1
        }
    }
}