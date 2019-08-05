import { Component, OnInit } from '@angular/core'
import {ApiService} from '../api.service'

@Component({
    selector:'restaurantes',
    templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit{
    displayedColumns = ['remover','editar', 'nome'] 

   restaurantes
   restaurante
   procurar: {id: number, nome: string} = { id: 0, nome:' '};
  
    constructor (private api:ApiService){}

    cadastrar(restaurante){
      this.api.postRestaurante(restaurante).subscribe(data => {

        this.restaurantes = data;
      })
  }
    ngOnInit(){
      this.api.getRestaurantes().subscribe(res=> {
        this.restaurantes = res})
        //this.changeDetectorRefs.detectChanges();
    }

    pesquisar(){
      this.api.getRestaurantesPorId(this.procurar.nome).subscribe(res=> {
        this.restaurantes = res})
        //this.changeDetectorRefs.detectChanges();
    }

    editar(restaurante){
      this.api.putRestaurante(restaurante)
    }
    
    remover(restaurante) {
      this.api.deleteRestaurante(restaurante).subscribe(data => {

        this.restaurantes = data;
      })
      //this.changeDetectorRefs.detectChanges();
    }
}