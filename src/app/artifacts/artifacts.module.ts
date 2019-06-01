import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArtifactsComponent } from '../artifacts/artifacts.component';
import { ArtifactsListComponent } from '../artifacts/artifacts-list/artifacts-list.component';
import { FilterArtifactsComponent } from './artifacts-list/filter-artifacts.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ ArtifactsComponent, ArtifactsListComponent, FilterArtifactsComponent ],
  exports: [ ArtifactsComponent ]
})

export class ArtifactsModule { }