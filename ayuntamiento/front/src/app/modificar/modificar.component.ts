import { Component, Input, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { ActivatedRoute, Route } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent implements OnInit{

  

  @Input () cif?: string |null ;


  constructor(APIService:APIService, private route: ActivatedRoute) {
  }

 ngOnInit(): void {
    this.cif=this.route.snapshot.paramMap.get('cif');
    console.log(this.cif)    
     this.route.paramMap.subscribe(param=> {this.cif= param.get('cif')
     console.log('CIF:', this.cif);
    })
    }
    
 } 

// boton al lado de cada proovedore para seleccionar y mostrar ventana emergente con todos los datos para modificar el que se quiera modifical pidiendo antes un get y luego hacer un put con los datos distintos