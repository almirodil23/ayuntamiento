import { Component, NgModule } from '@angular/core';
import { AuthService } from '../auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { EstadoService } from '../estado.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
  imports:[FormsModule,NgIf],

})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoginError: boolean = false;

  constructor(private authService: AuthService, private estado: EstadoService) {}

  async onSubmit(): Promise<void> {
    try {
      const isAuthenticated: boolean = await this.authService.login(this.username, this.password);
      if (isAuthenticated) {
        console.log('Inicio de sesión exitoso');
        this.estado.cambiarEstado(1); // Cambiar al estado deseado después del inicio de sesión
        // Aquí puedes redirigir a otra página si es necesario
      } else {
        console.log('Credenciales inválidas');
        alert('Credenciales inválidas')
        this.isLoginError = true;
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.isLoginError = true;
    }
  }
}