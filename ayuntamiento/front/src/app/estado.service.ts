import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private estado:number =0;
  
  private proovedor:any=[]

  estado$ = new BehaviorSubject<number>(this.estado);

  proovedor$ = new BehaviorSubject<any>(this.proovedor);

  cambiarEstado(estado:number): void {
    this.estado=(estado);
    this.estado$.next(this.estado);
  }

  getEstado(): number {
    return this.estado;
  }
  sendProovedor(proovedor:any): void {
     this.proovedor=proovedor;
     this.proovedor$.next(this.proovedor)
  }

  getProovedor(): any[] {
    return this.proovedor
  }
}
