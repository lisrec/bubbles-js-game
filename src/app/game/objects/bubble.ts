import Game from './game'
import GameObject from './game-object'
import { IColor } from '../../interfaces/icolor'

export default class Bubble extends GameObject {

	private fullRadius: number = 2 * Math.PI

	constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
		super(ctx, x, y, 5)
		this.color = IColor.randomColor()
		this.size = this.size * Game.SCALE
		this.velocityX = (Math.random() - 0.5) / 2 * Game.SCALE
		this.velocityY = (Math.random() - 0.5) / 2 * Game.SCALE
	}

	public update(): void {
		this.posX += this.velocityX
		this.posY += this.velocityY
		this.checkWallCollision()
	}

	public render(): void {
		const centerX = this.posX + this.size / 2
		const centerY = this.posY + this.size / 2

		this.ctx.fillStyle = this.color.getColor()

		this.ctx.beginPath()
		this.ctx.arc(centerX, centerY, this.size / 2, 0, this.fullRadius)
		this.ctx.fill()
	}
}
