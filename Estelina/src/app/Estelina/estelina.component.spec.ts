import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstelinaComponent } from './estelina.component';

describe('EstelinaComponent', () => {
  let component: EstelinaComponent;
  let fixture: ComponentFixture<EstelinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstelinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstelinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
