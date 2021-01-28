import { Component, OnInit } from '@angular/core';
import { CharactersService } from './../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters;
  constructor(
    private _charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.characters = this._charactersService.getCharacters();
  }

  
}
