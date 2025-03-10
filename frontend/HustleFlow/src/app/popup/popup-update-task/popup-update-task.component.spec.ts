import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateTaskComponent } from './popup-update-task.component';

describe('PopupUpdateTaskComponent', () => {
  let component: PopupUpdateTaskComponent;
  let fixture: ComponentFixture<PopupUpdateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupUpdateTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupUpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
