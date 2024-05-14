import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
export const routes: Routes = [
    { path: 'header', component: HeaderComponent},
    { path: 'home', component: HomeComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'punto1', component: Punto1Component},
    { path: 'punto2', component: Punto2Component},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
