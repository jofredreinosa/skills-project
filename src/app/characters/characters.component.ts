import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from './../services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters;
  loading: boolean;
  constructor(
    private _charactersService: CharactersService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters() {
    this.loading = true;
    this._charactersService.getCharacters().subscribe(result => {
      this.characters = result;
      this.loading = false;
    });
  }

  viewComics(id) {
    this._router.navigate(['/comics-by-character', {characterId: id}]);
  }
}
