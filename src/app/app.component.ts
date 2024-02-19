import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContactoComponent],
  template: '<app-contacto></app-contacto>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LaAgenda';
}
