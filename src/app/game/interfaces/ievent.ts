export default class IEvent {
	private _type: string
	private _data: object

	constructor(type: string, data: object = {}) {
		this._type = type
		this._data = data
	}

	get type(): string {
		return this._type
	}

	get data(): object {
		return this._data
	}
}
