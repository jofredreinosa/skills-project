import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { IndividualCharacterComponent } from './individual-character/individual-character.component';
import { ViewCharacterComicsComponent } from './view-character-comics/view-character-comics.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { ShowSingleCharacterComponent } from './show-single-character/show-single-character.component';
import { IndividualComicComponent } from './individual-comic/individual-comic.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    IndividualCharacterComponent,
    ViewCharacterComicsComponent,
    HomeComponent,
    LoadingComponent,
    ShowSingleCharacterComponent,
    IndividualComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
