import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { APIService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './tabla/tabla.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ModificarComponent } from './modificar/modificar.component';
import { NgIf } from '@angular/common';
import { EstadoService } from './estado.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,TablaComponent,RouterLink,EliminarComponent,FormularioComponent,ModificarComponent,NgIf,HomeComponent,LoginComponent],
  providers:[APIService,ModificarComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{

  componenteActual:number=0;

  proovedor: any[]=[]

  constructor(private estado:EstadoService,public authService: AuthService) {}

  ngOnInit(): void {

    if (this.authService.isAuthenticated) {this.estado.cambiarEstado(1)}
    else {this.estado.cambiarEstado(0)}
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

  deslogear():void{
    this.authService.logout();
    this.estado.cambiarEstado(0);
  }
}