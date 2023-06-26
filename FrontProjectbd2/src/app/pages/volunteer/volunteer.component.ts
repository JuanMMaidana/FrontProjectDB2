import { Component } from '@angular/core';
import { Subscription, debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { Publication } from 'src/app/components/entities/publication';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categoty } from 'src/app/components/entities/category';
import { PublicationService } from 'src/app/services/publication.service';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent {

  es_solicitud : boolean = false;

  publications: Publication[] = [];

  categories?: Categoty[];

  selectedCategory: string = 'Buscar por categoría';

  @ViewChild('publicationsInput') publicationsInput!: ElementRef

  constructor(private categoriesService:CategoriesService, private publicationService : PublicationService) { }




  async getAllCategories() {
    await this.categoriesService.getCategories().subscribe(category => this.categories = category);
  }


  async ngOnInit(): Promise<void> {
    await this.getAllCategories();

    let titulo = ''
    let categoria = ''
    const es_solicitud = false
    this.publicationService.getPublicationByTitleAndCategory(titulo,categoria, es_solicitud).subscribe(publication => this.publications = publication);
    }



    ngAfterViewInit(): void {
      const es_solicitud = false;

      fromEvent<Event>(this.publicationsInput.nativeElement, 'keyup').pipe(
        debounceTime(400),
        switchMap(event => {
          const publication = (event.target as HTMLInputElement).value;
          return this.publicationService.getPublicationByTitleAndCategory(publication, this.selectedCategory, es_solicitud);
        })
      ).subscribe(publication => this.publications = publication);
    }



  // loadMoreFilms(){
  //   this.i += this.n;
  //   this.filmsService.getFilmsByTitleAndGenre(this.filmsInput.nativeElement.value, this.selectedGenre, this.i, this.n).subscribe((films) => {
  //     this.filmArray = this.filmArray.concat(films);
  //   });
  // }





  searchCategoryVariable($event : Event, title : string){
    this.selectedCategory = ($event.target as HTMLInputElement).value;
    this.publicationService.getPublicationByTitleAndCategory( this.publicationsInput.nativeElement.value, this.selectedCategory, this.es_solicitud).subscribe(publication => this.publications = publication);
  }




}
