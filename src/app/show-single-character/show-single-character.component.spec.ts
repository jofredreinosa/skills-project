import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleCharacterComponent } from './show-single-character.component';

describe('ShowSingleCharacterComponent', () => {
  let component: ShowSingleCharacterComponent;
  let fixture: ComponentFixture<ShowSingleCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSingleCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSingleCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
