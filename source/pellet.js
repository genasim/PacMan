import { c } from "./engine.js"
import { Tile } from "./tile.js"

export class Pellet {
    constructor({ position, player }) {
        this.position = {
            x: position.x + Tile.size / 2,
            y: position.y + Tile.size / 2
        }
        this.player = player

        this.radius = 1
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = 'white'
        c.fill()
        c.closePath()
    }

    shouldConsume() {
        const a = (this.player.position.x - this.position.x) ** 2
        const b = (this.player.position.y - this.position.y) ** 2
        
        return (Math.sqrt(a+b) <= this.player.radius + this.radius)
    }
}