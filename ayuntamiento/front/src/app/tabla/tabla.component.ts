import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APIService } from '../api.service';
import { RouterLink,Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Observable,of } from 'rxjs';
import { ModificarComponent } from '../modificar/modificar.component';
import { AppComponent } from '../app.component';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule,ModificarComponent,CommonModule,NgFor,NgIf,AppComponent],
  providers:[APIService,RouterLink,CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
 
export class TablaComponent implements OnInit{
  
  data:any[]=[];

  proovedores$: Observable<any[]> = new Observable<any[]>();

  componenteActual!: number;
  
  proovedor: any[]=[]


  constructor (private APIService: APIService, private router: Router,private estado:EstadoService) 
  

  { }

 ngOnInit(): void {
  this.estado.estado$.subscribe((estado: number) => {
    this.componenteActual = estado;
  });
  this.estado.proovedor$.subscribe((proovedor: any) => {
    this.proovedor = proovedor;
  });
   this.APIService.getProovedores();
   this.APIService.getProovedoresObservable().subscribe(data=> {
    this.proovedores$=of(data)});
  }
  Modificar (proovedor:any): void { 
    this.estado.cambiarEstado(3);
    this.estado.sendProovedor(proovedor);
}
 Eliminar (proovedor:any): void {
  this.estado.cambiarEstado(4);
  this.estado.sendProovedor(proovedor);
}
}
