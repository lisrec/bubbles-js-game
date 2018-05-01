import { Component, OnInit } from '@angular/core'
import Game from './objects/game'

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	private canvasElement: HTMLCanvasElement
	private game: Game

	ngOnInit() {
		this.canvasElement = <HTMLCanvasElement> document.getElementById('canv-game')
		const ctx: CanvasRenderingContext2D = this.canvasElement.getContext('2d')

		this.game = new Game(ctx)
	}

	public start(): void {

	}

	public stop(): void {

	}
}
