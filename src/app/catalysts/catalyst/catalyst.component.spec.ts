import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystComponent } from './catalyst.component';

describe('CatalystComponent', () => {
  let component: CatalystComponent;
  let fixture: ComponentFixture<CatalystComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalystComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
