import Background from './background'
import Bubble from './bubble'

export default class Game {

	public static W_WIDTH: number = 600
	public static W_HEIGHT: number = 400
	public static SCALE: number = 10

	private running: boolean = false
	private ctx: CanvasRenderingContext2D

	private bg: Background
	private bubbles: Bubble[]

	private render(): void {
		this.bg.render()
		for (const bubble of this.bubbles) {
			bubble.render()
		}
	}

	private update(): void {
		this.bg.update()
	}

	private gameLoop(): void {
		setTimeout(() => {
			if (this.running) {
				this.update()
				this.render()
			}
		}, 1)
	}

	constructor(ctx: CanvasRenderingContext2D) {

		this.ctx = ctx

		this.ctx.canvas.width = Game.W_WIDTH
		this.ctx.canvas.height = Game.W_HEIGHT

		this.bg = new Background(this.ctx)
		this.bubbles = [
			new Bubble(this.ctx, 5, 0),
			new Bubble(this.ctx, 10, 0),
			new Bubble(this.ctx, 15, 0),
			new Bubble(this.ctx, 20, 0),
			new Bubble(this.ctx, 25, 0),
			new Bubble(this.ctx, 5, 5),
			new Bubble(this.ctx, 10, 5),
			new Bubble(this.ctx, 15, 5),
			new Bubble(this.ctx, 20, 5),
			new Bubble(this.ctx, 25, 5),
			new Bubble(this.ctx, 5, 10),
			new Bubble(this.ctx, 10, 10),
			new Bubble(this.ctx, 15, 10),
			new Bubble(this.ctx, 20, 10),
			new Bubble(this.ctx, 25, 10)
		]
		this.running = true
		this.gameLoop()
	}

}