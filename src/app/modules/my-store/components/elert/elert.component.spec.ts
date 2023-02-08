import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElertComponent } from './elert.component';

describe('ElertComponent', () => {
  let component: ElertComponent;
  let fixture: ComponentFixture<ElertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
