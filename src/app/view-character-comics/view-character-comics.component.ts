import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from './../services/characters.service';

@Component({
  selector: 'app-view-character-comics',
  templateUrl: './view-character-comics.component.html',
  styleUrls: ['./view-character-comics.component.scss']
})
export class ViewCharacterComicsComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    const characterId = this._activatedRoute.snapshot.paramMap.get('characterId');
    this._charactersService.getComicsByCharacters(characterId).subscribe( result => {
    console.log(result);
  })
  }

}
