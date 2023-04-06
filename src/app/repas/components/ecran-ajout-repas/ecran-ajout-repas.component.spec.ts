import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EcranAjoutRepasComponent } from './ecran-ajout-repas.component';

describe('EcranAjoutRepasComponent', () => {
  let component: EcranAjoutRepasComponent;
  let fixture: ComponentFixture<EcranAjoutRepasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EcranAjoutRepasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcranAjoutRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
