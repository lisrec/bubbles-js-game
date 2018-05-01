import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
	{ path: 'game', loadChildren: 'app/game/game.module#GameModule' },
	{ path: 'home', loadChildren: 'app/home/home.module#HomeModule'  },
	{ path: '',   redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
