import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystsComponent } from './catalysts.component';

describe('CatalystsComponent', () => {
  let component: CatalystsComponent;
  let fixture: ComponentFixture<CatalystsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalystsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalystsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
