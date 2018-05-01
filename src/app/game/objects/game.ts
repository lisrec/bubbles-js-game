import Background from './background'
import GameObject from './game-object'
import Bubble from './bubble'
import ObjectsManager from '../engine/objects-manager'

export default class Game {

	public static W_WIDTH: number = 600
	public static W_HEIGHT: number = 400
	public static SCALE: number = 10

	private gameLooper = (window.requestAnimationFrame) ? window.requestAnimationFrame : (c) => setTimeout(c, 16)

	private running: boolean = false
	private ctx: CanvasRenderingContext2D

	private bg: Background
	private objManager: ObjectsManager


	private update(): void {
		this.bg.update()
		this.objManager.update()
	}

	private render(): void {
		this.bg.render()
		this.objManager.render()
	}

	private gameLoop(): void {
		if (this.running) {
			this.update()
			this.render()
		}
		this.gameLooper(this.gameLoop.bind(this))
	}

	constructor(ctx: CanvasRenderingContext2D) {

		this.ctx = ctx
		this.objManager = new ObjectsManager()

		this.ctx.canvas.width = Game.W_WIDTH
		this.ctx.canvas.height = Game.W_HEIGHT

		this.bg = new Background(this.ctx)

		this.objManager.addObject(new Bubble(this.ctx, 5, 1))
		this.objManager.addObject(new Bubble(this.ctx, 10, 1))
		this.objManager.addObject(new Bubble(this.ctx, 15, 1))
		this.objManager.addObject(new Bubble(this.ctx, 20, 1))
		this.objManager.addObject(new Bubble(this.ctx, 25, 1))
		this.objManager.addObject(new Bubble(this.ctx, 5, 5))
		this.objManager.addObject(new Bubble(this.ctx, 10, 5))
		this.objManager.addObject(new Bubble(this.ctx, 15, 5))
		this.objManager.addObject(new Bubble(this.ctx, 20, 5))
		this.objManager.addObject(new Bubble(this.ctx, 25, 5))
		this.objManager.addObject(new Bubble(this.ctx, 5, 10))
		this.objManager.addObject(new Bubble(this.ctx, 10, 10))
		this.objManager.addObject(new Bubble(this.ctx, 15, 10))
		this.objManager.addObject(new Bubble(this.ctx, 20, 10))
		this.objManager.addObject(new Bubble(this.ctx, 25, 10))

		this.running = true
		this.gameLoop()
	}

	public start(): void {
		this.running = true
	}

	public stop(): void {
		this.running = false
	}

	public rmObject(id: number): void {
		this.objManager.removeObject(id)
	}

	public getObjects(): GameObject[] {
		return this.objManager.getObjects()
	}

}
