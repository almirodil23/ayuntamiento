import { APIService } from '../api.service';
import { Component,OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from '../tabla/tabla.component';
import { EliminarComponent } from '../eliminar/eliminar.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { ModificarComponent } from '../modificar/modificar.component';
import { NgIf } from '@angular/common';
import { EstadoService } from '../estado.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AuthService } from '../auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,TablaComponent,RouterLink,EliminarComponent,FormularioComponent,ModificarComponent,NgIf,LoginComponent],
  providers:[APIService,ModificarComponent  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  componenteActual!:number;

  proovedor: any[]=[]

  constructor(private estado:EstadoService,public authService: AuthService) {}

  ngOnInit(): void {
    this.estado.estado$.subscribe((estado: number) => {
      this.componenteActual = estado;
    });

    this.estado.proovedor$.subscribe((proovedor: any) => {
      this.proovedor = proovedor;
    });
  }
  Modificar(estado:number): void{
    this.estado.cambiarEstado(estado);
  }

  Enviar(proovedor:any): void{
    this.estado.sendProovedor(proovedor);
  }

}