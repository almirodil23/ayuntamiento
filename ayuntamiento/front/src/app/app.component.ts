import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { APIService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './tabla/tabla.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ModificarComponent } from './modificar/modificar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,TablaComponent,RouterLink,EliminarComponent,FormularioComponent,ModificarComponent],
  providers:[APIService,ModificarComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
