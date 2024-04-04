import { Injectable } from '@angular/core';
import { EstadoService } from './estado.service';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean;
  private lastActivityTime: number;
  private readonly saltRounds = 10; 


 
  private inactivityTimeout = 30 * 60 * 1000;

  constructor(private estado:EstadoService) {
    const storedAuth = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = storedAuth === 'true' ? true : false;
    this.lastActivityTime = Date.now();

  
    this.startInactivityTimer();
  }

  async login(username: string, password: string): Promise<boolean> {
    // En tu aplicación real, obtén el hash almacenado de la base de datos
    const storedHash = await this.getStoredHashForUser(username);

    if (!storedHash) {
      return false;
    }

    const passwordsMatch = await bcrypt.compare(password, storedHash);

    if (passwordsMatch) {
      this.estado.cambiarEstado(1);
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.estado.cambiarEstado(0);
    localStorage.removeItem('isAuthenticated');
  }

  private checkInactivity(): void {
    const currentTime = Date.now();
    const elapsedTime = currentTime - this.lastActivityTime;
    
    if (elapsedTime >= this.inactivityTimeout) {
      this.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    }
  }

  private startInactivityTimer(): void {
    setInterval(() => {
      this.checkInactivity();
    }, 1000); 
  }

  updateActivity(): void {
    this.lastActivityTime = Date.now();
  }

  private async getStoredHashForUser(username: string): Promise<string | null> {
    if (username === 'admin') {
      const salt = await bcrypt.genSalt(this.saltRounds);
      return await bcrypt.hash('admin', salt);
    }

    return null;
  }
}
