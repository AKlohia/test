import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsToCartsComponent } from './things-to-carts.component';

describe('ThingsToCartsComponent', () => {
  let component: ThingsToCartsComponent;
  let fixture: ComponentFixture<ThingsToCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThingsToCartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThingsToCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
