import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtifactsModule } from './artifacts/artifacts.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArtifactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
