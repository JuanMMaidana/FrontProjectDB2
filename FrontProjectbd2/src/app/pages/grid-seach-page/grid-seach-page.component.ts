import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { Publication } from 'src/app/components/entities/publication';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categoty } from 'src/app/components/entities/category';
import { PublicationService } from 'src/app/services/publication.service';


@Component({
  selector: 'app-grid-seach-page',
  templateUrl: './grid-seach-page.component.html',
  styleUrls: ['./grid-seach-page.component.css']
})
export class GridSeachPageComponent {


  es_solicitud : boolean = true;

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
    const es_solicitud = true
    this.publicationService.getPublicationByTitleAndCategory(titulo,categoria, es_solicitud).subscribe(publication => this.publications = publication);
    }



    ngAfterViewInit(): void {
      const es_solicitud = true;

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
