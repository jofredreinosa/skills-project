import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-single-character',
  templateUrl: './show-single-character.component.html',
  styleUrls: ['./show-single-character.component.scss']
})
export class ShowSingleCharacterComponent implements OnInit {
  @Input() character;
  @Input() comicList;
  constructor() { }

  ngOnInit(): void {
    
  }


}
