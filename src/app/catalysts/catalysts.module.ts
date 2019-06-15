import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CatalystsComponent } from './catalysts.component';
import { FilterCatalystsComponent } from './catalyst/filter-catalysts.component';
import { CatalystComponent } from './catalyst/catalyst.component';

@NgModule({
  imports: [ CommonModule, FormsModule, SharedModule ],
  declarations: [ CatalystsComponent, CatalystComponent, FilterCatalystsComponent ],
  exports: [ CatalystsComponent ]
})

export class CatalystsModule { }