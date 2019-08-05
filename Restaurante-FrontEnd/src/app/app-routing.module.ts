//Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestauranteRoutingModule } from './restaurante/restaurante-routing.module';
import { PratoRoutingModule } from './prato/prato-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
//Component
import { HomeComponent} from './home/home.component'
import { RestaurantesComponent} from './restaurante/restaurantes.component'
import { PratosComponent} from './prato/pratos.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'restaurante', component:  RestaurantesComponent},
  { path: 'prato', component: PratosComponent},

];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes),RestauranteRoutingModule,HomeRoutingModule,PratoRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
