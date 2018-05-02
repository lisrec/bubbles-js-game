import IEvent from '../interfaces/ievent'

export default abstract class EventListener {
	public abstract handleEvent(evt: IEvent)
}
