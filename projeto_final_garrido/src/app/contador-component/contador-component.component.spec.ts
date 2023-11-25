import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorComponentComponent } from './contador-component.component';

describe('ContadorComponentComponent', () => {
  let component: ContadorComponentComponent;
  let fixture: ComponentFixture<ContadorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
