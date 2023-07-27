import { Component } from '@angular/core';
import { NavBar } from 'src/app/models/navbar.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuLinks: NavBar[] = [
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
