import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormBuilder, FormGroup,Validators } from '@angular/forms';
import { APIService } from '../api.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers:[APIService],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  option:number=1;


  proovedores: any[]=[]

  constructor (public form:FormBuilder, private APIService:APIService) {}

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
   this.APIService.crearProovedor(proovedor)
      this.add.reset(); 
      window.location.reload();  
    }
  
  agregar (): void {
    this.option=0
    console.log(this.option)
  }}