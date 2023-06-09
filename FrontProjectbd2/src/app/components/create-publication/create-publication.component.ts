import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categoty } from '../entities/category';
import { FormGroup, FormBuilder, Validators, FormControl, NonNullableFormBuilder } from '@angular/forms';



@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent {

  constructor(private categoryService: CategoriesService, private formBuilder:FormBuilder, private fb: NonNullableFormBuilder) {   }


  categories?: Categoty[];

  subbmited: boolean = false;

  classTitle: string = 'form-control fondo border';

  descriptionClass: string = 'form-control fondo border';

  categoryClass: string = 'form-select form-select-sm mb-3 textoptions border';

  typeClass: string = 'form-select form-select-sm mb-3 textoptions border';


  form!: FormGroup;

  async ngOnInit(): Promise<void> {
    await this.getAllCategories();
    this.createForm();
  }

  async getAllCategories() {
    await this.categoryService.getCategories().subscribe(category => this.categories = category);
  }


  createForm() {
    this.form = this.fb.group({

      titleInput: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      category: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])

    });
  }

  get titleInput(){
    return this.form.controls['titleInput'];
  }

  get description(){
    return this.form.controls['description'];
  }

  get category(){
    return this.form.controls['category'];
  }

  get type(){
    return this.form.controls['type'];
  }

  onSubmit( formdata: any) {

    console.log(formdata);


    if (formdata.titleInput == ''){

      this.classTitle = 'form-control fondo is-invalid';
    }else{
      this.classTitle = 'form-control fondo border is-valid';
    }

    if (formdata.description == ''){
      this.descriptionClass = 'form-control fondo is-invalid';
    }else{
      this.descriptionClass = 'form-control fondo border is-valid';
    }



      if(formdata.titleInput != '' && formdata.description != '' && formdata.category != '' && formdata.type != '' && formdata.type != 'Selecciona tipo Publicación'){
        this.subbmited = true;
        console.log('Formulario enviado');
      }else{
        console.log('Formulario no enviado');
        alert('Formulario no enviado');

      }


}


}
