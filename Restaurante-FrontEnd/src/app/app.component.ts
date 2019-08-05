import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Gerenciamento de Restaurante'

  navLinks: any[];
  activeLinkIndex = -1;
 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home',
            link: './home',
            index: 0
        }, {
            label: 'Restaurantes',
            link: './restaurante',
            index: 1
        }, {
            label: 'Pratos',
            link: './prato',
            index: 2
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}


}