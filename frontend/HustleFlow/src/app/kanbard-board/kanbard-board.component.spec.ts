import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbardBoardComponent } from './kanbard-board.component';

describe('KanbardBoardComponent', () => {
  let component: KanbardBoardComponent;
  let fixture: ComponentFixture<KanbardBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbardBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbardBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
