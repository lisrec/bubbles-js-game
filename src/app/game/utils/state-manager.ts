export default class StateManager {

	private _hp: number
	private _score: number

	get hp(): number {
		return this._hp
	}

	set hp(newHp: number) {
		this._hp = newHp
	}

	get score(): number {
		return this._score
	}

	set score(newScore: number) {
		this._score = newScore
	}
}
