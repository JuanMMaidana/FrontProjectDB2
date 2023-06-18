import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  user = {
    id_user: 1,
    name: 'Juan',
    surname: 'Perez',
    email: 'juanperez@correo.com',
    direccion: 'Calle Falsa 123'
  }
}
