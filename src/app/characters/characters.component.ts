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
  characters: Observable<any>;
  constructor(
    private _charactersService: CharactersService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.characters = this._charactersService.getCharacters();
  }

  viewComics(id) {
    this._router.navigate(['/comics-by-character', {characterId: id}]);
  }
}
