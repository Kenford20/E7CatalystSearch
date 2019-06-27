import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { SharedModule } from './shared/shared.module';
import { CatalystsModule } from './catalysts/catalysts.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HeroesModule,
    CoreModule,
    SharedModule,
    CatalystsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
