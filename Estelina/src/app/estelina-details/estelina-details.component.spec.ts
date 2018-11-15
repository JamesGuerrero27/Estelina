import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstelinaDetailsComponent } from './estelina-details.component';

describe('EstelinaDetailsComponent', () => {
  let component: EstelinaDetailsComponent;
  let fixture: ComponentFixture<EstelinaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstelinaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstelinaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
