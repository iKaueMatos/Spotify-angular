import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTopImageComponent } from './artist-top-image.component';

describe('ArtistTopImageComponent', () => {
  let component: ArtistTopImageComponent;
  let fixture: ComponentFixture<ArtistTopImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistTopImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistTopImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
