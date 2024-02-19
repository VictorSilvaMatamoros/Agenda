import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, Validators ,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  nombreControl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  });

  numeroControl = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.required
    ]
  });

  contactos: { nombre: string, numero: string }[] = [];
  
  borrarAgendaActivo: boolean = false; 

  agregarContacto() {
    if (this.nombreControl.valid && this.numeroControl.valid) {
      const nombre = this.nombreControl.value?.toString() || '';
      const numero = this.numeroControl.value?.toString() || '';
      this.contactos.push({ nombre, numero });
    } else {
      alert('Por favor completa ambos campos');
    }
  }
  
  limpiarInputs() {
    this.nombreControl.reset();
    this.numeroControl.reset();
  }
  

 
  borrarContacto(index: number) {
    this.contactos.splice(index, 1);
  }
  
}