import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup,Validators } from '@angular/forms';
import { APIService } from '../api.service';
import { Subject } from 'rxjs';
import { EstadoService } from '../estado.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers:[APIService],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  proovedores: any[]=[]

  constructor (public form:FormBuilder, private APIService:APIService,private estado:EstadoService) {}

  add: FormGroup = this.form.group({
    cif:['', Validators.required],
    nombre:['', Validators.required],
    actividad:['', Validators.required],
    direccion:['', Validators.required],
    localidad:['', Validators.required],
    codigoPostal:['', Validators.required],
    telefono:['', Validators.required],
  });

  Cancelar(): void{
    this.estado.cambiarEstado(1);
  }

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

   if (
    this.add.value.cif.trim() === '' ||
    this.add.value.nombre.trim() === '' ||
    this.add.value.actividad.trim() === '' ||
    this.add.value.direccion.trim() === '' ||
    this.add.value.localidad.trim() === '' ||
    this.add.value.codigoPostal.trim() === '' ||
    this.add.value.telefono.trim() === ''
  ) {
    alert('Por favor completa todos los campos.');
    return;
  }
   this.APIService.crearProovedor(proovedor)
      this.add.reset(); 
      window.location.reload();  
    }
  
  agregar (): void {
    console.log('a')
  }}