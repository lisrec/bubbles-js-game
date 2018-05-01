import { IColor } from '../../interfaces/icolor'
import Game from './game'

export default class Background {

	ctx: CanvasRenderingContext2D
	bgColor: IColor = new IColor(0, 0, 0)

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx
	}

	public update(): void {}

	public render(): void {
		this.ctx.fillStyle = this.bgColor.getColor()
		this.ctx.fillRect(0, 0, Game.W_WIDTH, Game.W_HEIGHT)
	}

}
