import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePalleteComponent } from './create-pallete.component';

describe('CreatePalleteComponent', () => {
  let component: CreatePalleteComponent;
  let fixture: ComponentFixture<CreatePalleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePalleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
