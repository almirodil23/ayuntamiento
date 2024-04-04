import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'proovedores', component: AppComponent,},
    {path:'table', component:TablaComponent},
    {path:'**', component:AppComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
