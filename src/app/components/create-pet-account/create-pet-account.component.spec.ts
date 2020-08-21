import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePetAccountComponent } from './create-pet-account.component';

describe('CreatePetAccountComponent', () => {
  let component: CreatePetAccountComponent;
  let fixture: ComponentFixture<CreatePetAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePetAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePetAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
