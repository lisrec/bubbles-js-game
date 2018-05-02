import RenderableObject from '../engine/renderable-object'
import EventListener from '../engine/event-listener'
import { IColor } from '../interfaces/icolor'
import IEvent from '../interfaces/ievent'

export default class Hud extends RenderableObject implements EventListener {

	public id: number = new Date().getTime()
	protected ctx: CanvasRenderingContext2D

	private fontColor: IColor = new IColor(255, 255, 255)
	private fontStyle: string = '26px Arial'

	private _hp: number = null

	constructor(ctx: CanvasRenderingContext2D) {
		super()
		this.ctx = ctx
	}

	public handleEvent(evt: IEvent) {
		switch (evt.type) {
			case 'SET_HP':
				this._hp = evt.data['hp']
				break
		}
	}

	public render(): void {
		this.ctx.font = this.fontStyle
		this.ctx.fillStyle = this.fontColor.getColor()
		this.ctx.fillText(`HP: ${this._hp}`, 10, 10 + 26)
	}

	public update(): void {}
}
