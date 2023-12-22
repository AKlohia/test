import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagescomponetsComponent } from './imagescomponets.component';

describe('ImagescomponetsComponent', () => {
  let component: ImagescomponetsComponent;
  let fixture: ComponentFixture<ImagescomponetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagescomponetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagescomponetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
