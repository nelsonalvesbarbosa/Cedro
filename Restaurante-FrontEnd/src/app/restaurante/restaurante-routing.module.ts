
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { Restaurante_CadastroComponent} from './restaurante_cadastro.component'
const restauranteRoutes: Routes =[
  {
      path : 'restaurante/cadastro',
      component: Restaurante_CadastroComponent
  },
  {
    path : 'restaurante/cadastro/:id',
    component: Restaurante_CadastroComponent
  }
]
@NgModule({
    imports: [
        RouterModule.forChild(restauranteRoutes)
    ],
    exports : [RouterModule]
})
export class RestauranteRoutingModule {}