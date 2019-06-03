import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CatalystsComponent } from './catalysts.component';
import { CatalystsListComponent } from './catalysts-list/catalysts-list.component';
import { FilterCatalystsComponent } from './catalysts-list/filter-catalysts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ CommonModule, FormsModule, SharedModule ],
  declarations: [ CatalystsComponent, CatalystsListComponent, FilterCatalystsComponent ],
  exports: [ CatalystsComponent ]
})

export class CatalystsModule { }