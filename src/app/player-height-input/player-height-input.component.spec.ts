import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHeightInputComponent } from './player-height-input.component';

describe('PlayerHeightInputComponent', () => {
  let component: PlayerHeightInputComponent;
  let fixture: ComponentFixture<PlayerHeightInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerHeightInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHeightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
