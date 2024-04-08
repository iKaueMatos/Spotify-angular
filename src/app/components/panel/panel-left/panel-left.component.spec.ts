import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLeftComponent } from './panel-left.component';

describe('PanelLeftComponent', () => {
  let component: PanelLeftComponent;
  let fixture: ComponentFixture<PanelLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
