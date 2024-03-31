import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { ModificarComponent } from './modificar/modificar.component';

export const routes: Routes = [
    {path:'', component:AppComponent},
    {path:'table', component:TablaComponent},
    {path: 'modificar/:cif', component: ModificarComponent }, 
    {path:'**', component:AppComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
