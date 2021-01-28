import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-individual-character',
  templateUrl: './individual-character.component.html',
  styleUrls: ['./individual-character.component.scss']
})
export class IndividualCharacterComponent implements OnInit {
  @Input() character;
  @Output() viewCharacterComics = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public getImage(thumbnail): string {
    const img = `${thumbnail.path}.${thumbnail.extension}`;
    return img;
  }

  public viewComics(characterId) {
    this.viewCharacterComics.emit(characterId);
  }

}
