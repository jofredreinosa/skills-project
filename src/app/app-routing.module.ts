import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ViewCharacterComicsComponent } from './view-character-comics/view-character-comics.component';


const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'comics-by-character',
    component: ViewCharacterComicsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
