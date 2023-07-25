import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuLinks = [
    {
      title: 'Home',
      url: 'home'
    }, 
    {
      title: 'Proyectos',
      url: 'proyectos'
    }, 
    {
      title: 'Contacto',
      url: 'contacto'
    }, 
    {
      title: 'Tienda',
      url: 'tienda'
    }, 
  ]
}
