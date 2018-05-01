import GameObject from '../objects/game-object'

export default class ObjectsManager {

	private objectsList: GameObject[] = []

	constructor() {}

	public update(): void {
		for (let i = 0; i < this.objectsList.length; i++) {
			this.objectsList[i].update()
		}
	}

	public render(): void {
		for (let i = 0; i < this.objectsList.length; i++) {
			this.objectsList[i].render()
		}
	}

	public getObjects(): GameObject[] {
		return this.objectsList
	}

	public addObject(object: GameObject): number {
		return this.objectsList.push(object)
	}

	public removeObject(objectId: number): boolean {
		const idx = this.objectsList.findIndex(obj => obj.id === objectId)
		if (idx !== -1) {
			this.objectsList.splice(idx, 1)
			return true
		}
		return false
	}
}
