//Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteRoutingModule } from './restaurante-routing.module';
//Component
import {RestauranteComboComponent} from './restaurante-combo.component'
import {RestaurantesComponent} from './restaurantes.component'
import { Restaurante_CadastroComponent } from './restaurante_cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    RestauranteRoutingModule
    ],
  declarations: [RestaurantesComponent, Restaurante_CadastroComponent, RestauranteComboComponent],
  exports : []
})
export class RestaurantesModule { }