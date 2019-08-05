//Module
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
//Component
import {PratosComponent} from './pratos.component'
import { Prato_CadastroComponent } from './prato_cadastro.component';

@NgModule({
  imports: [
    NgModule,
    CommonModule
  ],
  declarations: [PratosComponent, Prato_CadastroComponent],
  exports : [ ]
})
export class PratoModule { } 
