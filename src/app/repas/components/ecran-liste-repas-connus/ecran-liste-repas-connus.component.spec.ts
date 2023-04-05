import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranListeRepasConnusComponent } from './ecran-liste-repas-connus.component';

describe('EcranListeRepasConnusComponent', () => {
  let component: EcranListeRepasConnusComponent;
  let fixture: ComponentFixture<EcranListeRepasConnusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcranListeRepasConnusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcranListeRepasConnusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
