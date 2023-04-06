import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EcranListeRepasConnusComponent } from './ecran-liste-repas-connus.component';

describe('EcranListeRepasConnusComponent', () => {
  let component: EcranListeRepasConnusComponent;
  let fixture: ComponentFixture<EcranListeRepasConnusComponent>;

  beforeEach(waitForAsync(() => {
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
