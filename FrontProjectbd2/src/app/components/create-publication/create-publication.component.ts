import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categoty } from '../entities/category';



@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent {

  constructor(private categoryService: CategoriesService) {   }

  categories?: Categoty[];

  async ngOnInit(): Promise<void> {
    await this.getAllCategories();
  }

  async getAllCategories() {
    await this.categoryService.getCategories().subscribe(category => this.categories = category);
  }

}
