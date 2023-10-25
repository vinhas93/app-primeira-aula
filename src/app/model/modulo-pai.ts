import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ModuloFilho1 } from './modulo-filho1';
import { ModuloFilho2 } from './modulo-filho2';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ModuloFilho1,
    ModuloFilho2
  ],
  exports: [RouterModule]
})
export class ModuloPai { }
