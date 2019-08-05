import {Component, OnInit} from '@angular/core'
import {ApiPratoService} from '../api-prato.service'

@Component({
    selector:'pratos',
    templateUrl: './pratos.component.html'
})
export class PratosComponent implements OnInit{
  displayedColumns = ['remover', 'editar','restaurante', 'prato', 'preco'] 
  pratos
  prato

  constructor (private api:ApiPratoService){}

    cadastrar(prato){
      this.api.postPrato(prato).subscribe(data => {
        this.pratos = data;
      })
    }

    ngOnInit(){
      this.api.getPratos().subscribe(res=> {
        this.pratos = res})
        //this.changeDetectorRefs.detectChanges();
    }

    remover(prato) {
      this.api.deletePrato(prato).subscribe(data => {
        this.pratos = data;
      })
      //this.changeDetectorRefs.detectChanges();
      
    }
}