import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EcranCorveesComponent } from './ecran-corvees.component';

describe('EcranCorveesComponent', () => {
  let component: EcranCorveesComponent;
  let fixture: ComponentFixture<EcranCorveesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EcranCorveesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcranCorveesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
