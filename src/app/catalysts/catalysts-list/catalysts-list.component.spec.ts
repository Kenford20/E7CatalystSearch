import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystsListComponent } from './catalysts-list.component';

describe('CatalystsListComponent', () => {
  let component: CatalystsListComponent;
  let fixture: ComponentFixture<CatalystsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalystsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalystsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
