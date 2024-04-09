import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPanelComponent } from './button-panel.component';

describe('ButtonPanelComponent', () => {
  let component: ButtonPanelComponent;
  let fixture: ComponentFixture<ButtonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
