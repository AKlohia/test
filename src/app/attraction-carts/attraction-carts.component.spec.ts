import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionCartsComponent } from './attraction-carts.component';

describe('AttractionCartsComponent', () => {
  let component: AttractionCartsComponent;
  let fixture: ComponentFixture<AttractionCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttractionCartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttractionCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
