import { IColor } from '../../interfaces/icolor'
import Game from './game'

export default class Bubble {

	private ctx: CanvasRenderingContext2D
	private color: IColor
	private posX: number
	private posY: number
	private size: number = 5
	private fullRadius: number = 2 * Math.PI

	constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
		this.color = IColor.randomColor()
		this.ctx = ctx
		this.posX = x * Game.SCALE
		this.posY = y * Game.SCALE
		this.size = this.size * Game.SCALE
	}

	public update(): void {

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
