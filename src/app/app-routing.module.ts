import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { ViewCharacterComicsComponent } from './view-character-comics/view-character-comics.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'comics-by-character',
    component: ViewCharacterComicsComponent 
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
