import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environments.prod';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  private proovedoresSubject = new BehaviorSubject<any[]>([]);


  //private url = `${environment.apiUrl}/proovedores`;
  private url = "http://3.68.167.172:3000/proovedores"


  constructor(private http:HttpClient) {
    this.http.get(this.url)
   }


  getProovedores() {
    this.http.get<any[]>(this.url).subscribe(data=> {
      this.proovedoresSubject.next(data)
    })
  } 

  getProovedoresObservable(): Observable<any>{
    return this.proovedoresSubject.asObservable();
  }

  getProovedoresCif(cif:string): Observable<any>{
    return this.http.get(`${this.url}/:${cif}`)
  }

  crearProovedor(proovedor:any){
    return this.http.post<any>(this.url,proovedor).subscribe(data=>{
      this.proovedoresSubject.next(proovedor)
    })
  }

  actualizarProovedor(proovedor:any): Observable<any>{
    return this.http.put(this.url,proovedor)
  }

  actualizarProovedoryCif(proovedor:any): Observable<any>{
    return this.http.put(this.url,proovedor)
  }
  
  eliminarProovedor(cif:string): Observable<any>{ 
    return this.http.delete(`${this.url}/${cif}`)
  }
  
}
