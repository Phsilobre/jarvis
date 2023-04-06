import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CorveeComponent } from './corvee.component';

describe('CorveeComponent', () => {
  let component: CorveeComponent;
  let fixture: ComponentFixture<CorveeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CorveeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
