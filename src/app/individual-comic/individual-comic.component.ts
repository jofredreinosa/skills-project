import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-comic',
  templateUrl: './individual-comic.component.html',
  styleUrls: ['./individual-comic.component.scss']
})
export class IndividualComicComponent implements OnInit {
  @Input() comic;
  constructor() { }

  ngOnInit(): void {
    console.log(this.comic);
  }

}
