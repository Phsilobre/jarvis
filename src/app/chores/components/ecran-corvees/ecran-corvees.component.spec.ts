import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranCorveesComponent } from './ecran-corvees.component';

describe('EcranCorveesComponent', () => {
  let component: EcranCorveesComponent;
  let fixture: ComponentFixture<EcranCorveesComponent>;

  beforeEach(async(() => {
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
