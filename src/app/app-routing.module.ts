import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGameComponent } from './components/add-game/add-game.component';
import { ListGameComponent } from './components/list-game/list-game.component';
import { UpdateGameComponent } from './components/update-game/update-game/update-game.component';


const routes: Routes = [
  { path:'',component:ListGameComponent},
  { path:'list-game',component:ListGameComponent},
  { path:'edit-game',component:UpdateGameComponent},
  { path:'add-game',component:AddGameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
