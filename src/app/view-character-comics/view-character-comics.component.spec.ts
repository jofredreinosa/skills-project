import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterComicsComponent } from './view-character-comics.component';

describe('ViewCharacterComicsComponent', () => {
  let component: ViewCharacterComicsComponent;
  let fixture: ComponentFixture<ViewCharacterComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCharacterComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharacterComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
