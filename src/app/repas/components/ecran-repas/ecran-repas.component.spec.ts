import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EcranRepasComponent } from './ecran-repas.component';

describe('EcranRepasComponent', () => {
  let component: EcranRepasComponent;
  let fixture: ComponentFixture<EcranRepasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EcranRepasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcranRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
