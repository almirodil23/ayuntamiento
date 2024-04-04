import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup,Validators } from '@angular/forms';
import { APIService } from '../api.service';
import { EstadoService } from '../estado.service';

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
  selector: 'app-modificar',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers:[APIService],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})


export class ModificarComponent{
  
    proovedores: any[]=[]

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
  
    constructor (public form:FormBuilder, private APIService:APIService,private estado:EstadoService) {

      this.estado.estado$.subscribe((estado: number) => {
        this.componenteActual = estado;
      });
      this.estado.proovedor$.subscribe((proovedor: any) => {
        this.proovedor = proovedor;
        console.log(this.proovedor)
        this.add.patchValue({
          cif:this.proovedor.cif,
          nombre:this.proovedor.nombre,
          actividad:this.proovedor.actividad,
          direccion:this.proovedor.direccion,
          localidad:this.proovedor.localidad,
          codigoPostal:this.proovedor.codigoPostal,
          telefono:this.proovedor.telefono,          })
      }); 
     
    }
  

      add: FormGroup = this.form.group({
      cif:['', Validators.required],
      nombre:['', Validators.required],
      actividad:['', Validators.required],
      direccion:['', Validators.required],
      localidad:['', Validators.required],
      codigoPostal:['', Validators.required],
      telefono:['', Validators.required],
   
    });
  
  
    onSubmit(): void {
     const proovedor:any={
      cif:this.add.value.cif,
      nombre:this.add.value.nombre,
      actividad:this.add.value.actividad,
      direccion:this.add.value.direccion,
      localidad:this.add.value.localidad,
      codigoPostal:this.add.value.codigoPostal,
      telefono:this.add.value.telefono   
     }
     this.APIService.actualizarProovedor(proovedor).subscribe(
      (response) => {
        console.log('Respuesta de la solicitud PUT:', response);
      },
      (error) => {
        console.error('Error al realizar la solicitud PUT:', error);
      }
    );        this.add.reset(); 
        window.location.reload();  
        this.estado.cambiarEstado(1);
      }
  }
