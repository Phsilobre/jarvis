import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranCorveeComponent } from './ecran-corvee.component';

describe('EcranCorveeComponent', () => {
  let component: EcranCorveeComponent;
  let fixture: ComponentFixture<EcranCorveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcranCorveeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranCorveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
