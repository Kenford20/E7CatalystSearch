import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './heroes-list/hero.component';
import { FilterHeroesComponent } from './heroes-list/filter-heroes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ CommonModule, FormsModule, SharedModule ],
  declarations: [ HeroesComponent, HeroComponent, FilterHeroesComponent ],
  exports: [ HeroesComponent ]
})

export class HeroesModule { }