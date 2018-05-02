import IEvent from '../interfaces/ievent'
import EventListener from './event-listener'


export default class EventsBus {

	private listeners: EventListener[] = []

	private logEvent(evt: IEvent) {
		console.log(`new IEvent('${evt.type}', ${JSON.stringify(evt.data)})`)
	}

	constructor(listeners: EventListener[]) {
		this.listeners = listeners
	}

	public sendEvent(evt: IEvent): void {
		this.logEvent(evt)
		for (let i = 0; i < this.listeners.length; i++) {
			this.listeners[i].handleEvent(evt)
		}
	}

	public addListener(newListener: EventListener): void {
		this.listeners.push(newListener)
	}
}
