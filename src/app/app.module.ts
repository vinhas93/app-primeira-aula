import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './model/home/home.component';
import { AboutComponent } from './model/about/about.component';
import { Pagina1Component } from './model/pagina1/pagina1.component';
import { Pagina2Component } from './model/pagina2/pagina2.component';
import { RouterModule } from '@angular/router';
import { ModuloPai } from './model/modulo-pai';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, Pagina1Component, Pagina2Component],
  imports: [BrowserModule, RouterModule],
  providers: [ModuloPai],
  bootstrap: [ModuloPai],
})
export class AppModule {}
