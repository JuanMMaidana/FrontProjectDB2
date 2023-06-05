import { Component, Input } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import { Publication } from '../entities/publication';

@Component({
  selector: 'app-publication-grid',
  templateUrl: './publication-grid.component.html',
  styleUrls: ['./publication-grid.component.css']
})
export class PublicationGridComponent {

  @Input() publications: Publication[] = [];  

  constructor(
    private publicationService: PublicationService
  ) { }

  getPublications(): void {
    this.publicationService.getPublications()
      .subscribe(publications => this.publications = publications);
  }

  ngOnInit(): void {
    this.getPublications();
  }
}
