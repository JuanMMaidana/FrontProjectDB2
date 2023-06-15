import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categoty } from '../entities/category';

@Component({
  selector: 'app-listgrids',
  templateUrl: './listgrids.component.html',
  styleUrls: ['./listgrids.component.css']
})
export class ListgridsComponent {


  constructor(private categoriesService: CategoriesService) { }


  categories?: Categoty[];


  async ngOnInit(): Promise<void> {
    await this.getAllCategories();
  }

  async getAllCategories() {
    await this.categoriesService.getCategories().subscribe(category => this.categories = category);
  }
}
