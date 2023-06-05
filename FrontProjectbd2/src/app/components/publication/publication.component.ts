import { Component, Input } from '@angular/core';
import { Publication } from '../entities/publication';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {



  @Input() publication?: Publication;


  }


