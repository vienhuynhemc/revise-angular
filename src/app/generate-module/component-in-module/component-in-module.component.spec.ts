import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInModuleComponent } from './component-in-module.component';

describe('ComponentInModuleComponent', () => {
  let component: ComponentInModuleComponent;
  let fixture: ComponentFixture<ComponentInModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
