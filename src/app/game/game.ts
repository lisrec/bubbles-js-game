import ObjectsManager from './engine/objects-manager'
import Background from './objects/background'
import GameObject from './engine/game-object'
import Bubble from './objects/bubble'
import StateManager from './utils/state-manager'
import EventsBus from './engine/events-bus'
import Hud from './objects/hud'
import IEvent from './interfaces/ievent'
import EventListener from './engine/event-listener'

export default class Game implements EventListener {

	public static readonly W_WIDTH: number = 600
	public static readonly W_HEIGHT: number = 400
	public static readonly SCALE: number = 10

	private gameLooper = (window.requestAnimationFrame) ? window.requestAnimationFrame : (c) => setTimeout(c, 16)

	private running: boolean = false
	private ctx: CanvasRenderingContext2D

	private bg: Background
	private hud: Hud
	private objManager: ObjectsManager
	private stateMng: StateManager
	private eventsBus: EventsBus

	private update(): void {
		this.bg.update()
		this.objManager.update()
		this.hud.update()
	}

	private render(): void {
		this.bg.render()
		this.objManager.render()
		this.hud.render()
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
		this.hud = new Hud(this.ctx)

		this.eventsBus = new EventsBus([this, this.hud])
		this.eventsBus.sendEvent(new IEvent('SET_HP', {hp: 3}))

		; (<any>window).eventBus = this.eventsBus
		; (<any>window).IEvent = IEvent

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

	public handleEvent(evt: IEvent) {
		switch (evt.type) {
			case 'SET_HP':
				this.running = (evt.data['hp'] > 0)
				break
		}
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
