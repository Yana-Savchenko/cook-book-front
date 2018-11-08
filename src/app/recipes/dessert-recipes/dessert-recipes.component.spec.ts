import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertRecipesComponent } from './dessert-recipes.component';

describe('DessertRecipesComponent', () => {
  let component: DessertRecipesComponent;
  let fixture: ComponentFixture<DessertRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessertRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
