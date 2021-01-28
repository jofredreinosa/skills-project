import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from './../services/characters.service';

interface Character {
  name: string;
  thumbnail: string;
}
@Component({
  selector: 'app-view-character-comics',
  templateUrl: './view-character-comics.component.html',
  styleUrls: ['./view-character-comics.component.scss']
})
export class ViewCharacterComicsComponent implements OnInit {
  private characterId;
  characters: Character[] = [];
  singleCharacter: Character;
  comics;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.characterId = this._activatedRoute.snapshot.paramMap.get('characterId');
    this.getCharacter();
    this.getComics();

  }

  private getCharacter() {
    this._charactersService.getComicsByCharacters(this.characterId).subscribe( result => {
      this.comics = result;
    });
  }

  private getComics() {
    this._charactersService.getCharacterById(this.characterId).subscribe( result => {
      this.characters = result.map( character => {
        return {
          name: character.name,
          thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`
        }
      });
      this.singleCharacter = this.characters[0];
    });
  }

}
