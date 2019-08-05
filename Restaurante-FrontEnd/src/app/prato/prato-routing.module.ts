
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { Prato_CadastroComponent} from './prato_cadastro.component'

const pratoRoutes: Routes =[
  {
      path : 'prato/cadastro',
      component: Prato_CadastroComponent
  },
  {
    path : 'prato/cadastro/:id',
    component: Prato_CadastroComponent
  }
]
@NgModule({
    imports: [
        RouterModule.forChild(pratoRoutes)
    ],
    exports : [RouterModule]
})
export class PratoRoutingModule {}