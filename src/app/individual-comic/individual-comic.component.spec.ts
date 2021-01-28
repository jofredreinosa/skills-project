import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualComicComponent } from './individual-comic.component';

describe('IndividualComicComponent', () => {
  let component: IndividualComicComponent;
  let fixture: ComponentFixture<IndividualComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
