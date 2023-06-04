import { Component } from '@angular/core';
import { Publication } from '../entities/publication';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {

  publication: Publication = {
    id_publication : 1, title : 'Árbol caido', description : 'Buenas, la semana pasada hubo una tormenta y desafortunadamente cayo un rayo en el barrio y hizo que un arbol este en el medio de la calle, necesito ayuda para que alguien me ayude a sacarlo, muchas gracias!', date :'2020-01-01', type_publication : true, categories : 'Personal', habilities :'Fueza', photos : '../../../assets/images/arbol2.jpg', state : 'Activo'}
  }


