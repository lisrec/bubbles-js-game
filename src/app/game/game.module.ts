import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GameComponent } from './game.component'
import { GameRoutingModule } from './game-routing.module'

@NgModule({
	imports: [
		CommonModule,
		GameRoutingModule
	],
	declarations: [GameComponent]
})
export class GameModule { }
