import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePalleteComponent } from './one-pallete.component';

describe('OnePalleteComponent', () => {
  let component: OnePalleteComponent;
  let fixture: ComponentFixture<OnePalleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePalleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
