import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCharacterComponent } from './individual-character.component';

describe('IndividualCharacterComponent', () => {
  let component: IndividualCharacterComponent;
  let fixture: ComponentFixture<IndividualCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
