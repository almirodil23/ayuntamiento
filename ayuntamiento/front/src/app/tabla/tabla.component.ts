import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { RouterLink,Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Observable,of } from 'rxjs';
import { ModificarComponent } from '../modificar/modificar.component';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule,ModificarComponent,CommonModule,NgFor,NgIf],
  providers:[APIService,RouterLink,CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
 
export class TablaComponent implements OnInit{
  
  data:any[]=[];

  proovedores$: Observable<any[]> = new Observable<any[]>();

  option:number=1;

  constructor (private APIService: APIService, private router: Router) 
  

  { }

 ngOnInit(): void {
   this.APIService.getProovedores();
   this.APIService.getProovedoresObservable().subscribe(data=> {
    this.proovedores$=of(data)});
  }
  Modificar (cif:string): void { 
    console.log('Navegando a ModificarComponent con cif:', cif);
    this.option=0;
}
 Eliminar (cif:string): void {
  console.log(cif);
 }
}
