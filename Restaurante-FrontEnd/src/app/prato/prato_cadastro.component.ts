import {Component, OnInit} from '@angular/core'
import {ApiPratoService} from '../api-prato.service'
import {PratosComponent} from './pratos.component'
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
    selector:'cadastro',
    templateUrl: './prato_cadastro.component.html'
})
export class Prato_CadastroComponent implements OnInit {

  prato ={}
  form: FormGroup;

    constructor (
		private api:ApiPratoService,
		private route : ActivatedRoute,
		private router: Router){}

    pratoComponent = new PratosComponent(this.api)
    
    ngOnInit(){
      this.route.params.forEach((params: Params)=>{
        let id:number = params['id'];
    if(id) {    
         this.api.getPratosPorNome(id).subscribe
         (res=> {
          this.prato = res[0]})
    }
  });}

    cadastrar(prato){
        this.api.postPrato(prato).subscribe(data => {
          this.pratoComponent.prato = data;
          this.router.navigate(['/prato']);
        })
    }
}