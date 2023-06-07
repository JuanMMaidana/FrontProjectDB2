import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { Publication } from 'src/app/components/entities/publication';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categoty } from 'src/app/components/entities/category';


@Component({
  selector: 'app-grid-seach-page',
  templateUrl: './grid-seach-page.component.html',
  styleUrls: ['./grid-seach-page.component.css']
})
export class GridSeachPageComponent {

  private i : number = 0;
  private n : number = 12;
  
  publications: Publication[] = [];

  categories?: Categoty[];

  selectedCategory: string = 'Buscar por categoría';

  @ViewChild('filmsInput') filmsInput!: ElementRef

  filmsSuscription!: Subscription;

  constructor(private categoriesService:CategoriesService) { }


  async ngOnInit(): Promise<void> {
    await this.getAllCategories();
    console.log(this.categories);
  }

  async getAllCategories() {
    await this.categoriesService.getCategories().subscribe(category => this.categories = category);
  }


  // async ngOnInit(): Promise<void> {
  //   await this.getAllGenres();
  //   this.filmsService.getFilmsByTitleAndGenre('','', this.i, this.n).subscribe(films => this.filmArray = films);
  // }




    //   ngAfterViewInit(): void {
    //       fromEvent<Event>(this.filmsInput.nativeElement, 'keyup').pipe(
    //       map(event => (event.target as HTMLInputElement).value),
    //     debounceTime(400),
    //     switchMap(title => this.filmsService.getFilmsByTitleAndGenre(title, this.selectedCategory, this.i = 0, this.n))
    //   ).subscribe(films => this.filmArray = films);
    // }

  
  // loadMoreFilms(){
  //   this.i += this.n;
  //   this.filmsService.getFilmsByTitleAndGenre(this.filmsInput.nativeElement.value, this.selectedGenre, this.i, this.n).subscribe((films) => {
  //     this.filmArray = this.filmArray.concat(films);
  //   });
  // }


 


  // searchGenreVariable($event : Event, title : string){
  //   this.i = 0;
  //   this.selectedGenre = ($event.target as HTMLInputElement).value;
  //   this.filmsService.getFilmsByTitleAndGenre( this.filmsInput.nativeElement.value, this.selectedGenre, this.i , this.n).subscribe(films => this.filmArray = films);
  // }



}
