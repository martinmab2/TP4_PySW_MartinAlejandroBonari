import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, HomeComponent, FooterComponent, Punto1Component, Punto2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BonariMartinAlejandro-Angular';
}
