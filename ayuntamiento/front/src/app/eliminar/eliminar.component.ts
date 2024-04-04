import { Component } from '@angular/core';
import { EstadoService } from '../estado.service';
import { APIService } from '../api.service';

interface Proovedor {
  cif: string;
  nombre: string;
  actividad: string;
  direccion: string;
  localidad: string;
  codigoPostal: string;
  telefono: string;
}
@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  componenteActual!: number;

  proovedor: Proovedor = {
    cif: '',
    nombre: '',
    actividad: '',
    direccion: '',
    localidad: '',
    codigoPostal: '',
    telefono: ''
  };

  constructor(private estado:EstadoService,private api:APIService) {
    this.estado.proovedor$.subscribe((proovedor: any) => {
      this.proovedor = proovedor;
    })

}

Eliminar():void{
  this.estado.cambiarEstado(1);
  this.api.eliminarProovedor(this.proovedor.cif).subscribe(
    () => {
      console.log('Proveedor eliminado exitosamente');
    },
    (error) => {
      console.error('Error al eliminar el proveedor:', error);
    }
  );
  window.location.reload();  
}
Cancelar():void{
  this.estado.cambiarEstado(1)
}
}

