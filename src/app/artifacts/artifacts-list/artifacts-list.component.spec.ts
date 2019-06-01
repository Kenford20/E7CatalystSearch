import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsListComponent } from './artifacts-list.component';

describe('ArtifactsListComponent', () => {
  let component: ArtifactsListComponent;
  let fixture: ComponentFixture<ArtifactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
