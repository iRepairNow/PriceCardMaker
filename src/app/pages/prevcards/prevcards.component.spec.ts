import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevcardsComponent } from './prevcards.component';

describe('PrevcardsComponent', () => {
  let component: PrevcardsComponent;
  let fixture: ComponentFixture<PrevcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
