import Game from './game'
import { IColor } from '../../interfaces/icolor'

export default abstract class GameObject {

	protected ctx: CanvasRenderingContext2D

	protected color: IColor

	protected size: number = 5

	protected posX: number
	protected posY: number

	protected velocityX: number = 0
	protected velocityY: number = 0

	abstract render(): void
	abstract update(): void

	protected checkWallCollision(): void {
		if (this.posX <= 0 || this.posX + this.size >= Game.W_WIDTH) {
			this.velocityX *= -1
		}
		if (this.posY <= 0 || this.posY + this.size >= Game.W_HEIGHT) {
			this.velocityY *= -1
		}
	}

	constructor(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
		this.ctx = ctx
		this.size = size
		this.posX = x * Game.SCALE
		this.posY = y * Game.SCALE
	}
}
