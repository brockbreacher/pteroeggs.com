import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggCardComponent } from './egg-card.component';

describe('EggCardComponent', () => {
  let component: EggCardComponent;
  let fixture: ComponentFixture<EggCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
