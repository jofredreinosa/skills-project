import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-character',
  templateUrl: './individual-character.component.html',
  styleUrls: ['./individual-character.component.scss']
})
export class IndividualCharacterComponent implements OnInit {
  @Input() character;

  constructor() { }

  ngOnInit(): void {
  }

  public getImage(thumbnail): string {
    const img = `${thumbnail.path}.${thumbnail.extension}`;
    return img;
  }

}
