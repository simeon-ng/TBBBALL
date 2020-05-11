import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerFormComponent } from './player-form/player-form.component';


const routes: Routes = [
  { path: 'player-form', component: PlayerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
