import {Component, OnInit, ChangeDetectorRef} from '@angular/core'
import {ApiService} from '../api.service'
import {RestaurantesComponent} from './restaurantes.component'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {FormGroup} from '@angular/forms'

@Component({
    selector:'cadastro',
    templateUrl: './restaurante_cadastro.component.html'
})

export class Restaurante_CadastroComponent implements OnInit {
  restaurante ={}
  form: FormGroup;

    constructor (private api:ApiService,
      private changeDetectorRefs: ChangeDetectorRef,
      private route : ActivatedRoute,
      private router: Router){}

    restaurantesComponent = new RestaurantesComponent(this.api);


    ngOnInit(){
      this.route.params.forEach((params: Params)=>{
        let id:number = params['id'];
      if(id) {    
          this.api.getRestaurantesPorId(id).subscribe
          (res=> {
            this.restaurante = res[0]})
          }});
      }

    cadastrar(restaurante){
        this.api.postRestaurante(restaurante).subscribe(data => {
          this.restaurantesComponent.restaurantes = data;
          this.router.navigate(['/restaurante']);
        })
    } 
}