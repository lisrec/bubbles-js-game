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

	private update(): void {
		this.bg.update()
		for (const bubble of this.bubbles) {
			bubble.update()
		}
	}

	private render(): void {
		this.bg.render()
		for (const bubble of this.bubbles) {
			bubble.render()
		}
	}

	private gameLoop(): void {
		setTimeout(() => {
			if (this.running) {
				this.update()
				this.render()
			}
			this.gameLoop()
		}, 16.6)
	}

	constructor(ctx: CanvasRenderingContext2D) {

		this.ctx = ctx

		this.ctx.canvas.width = Game.W_WIDTH
		this.ctx.canvas.height = Game.W_HEIGHT

		this.bg = new Background(this.ctx)
		this.bubbles = [
			new Bubble(this.ctx, 5, 1),
			new Bubble(this.ctx, 10, 1),
			new Bubble(this.ctx, 15, 1),
			new Bubble(this.ctx, 20, 1),
			new Bubble(this.ctx, 25, 1),
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

	public start(): void {
		this.running = true
	}

	public stop(): void {
		this.running = false
	}

}
