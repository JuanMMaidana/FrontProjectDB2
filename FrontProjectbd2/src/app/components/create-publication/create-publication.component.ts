import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categoty } from '../entities/category';
import { FormGroup, FormBuilder, Validators, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { PublicationService } from 'src/app/services/publication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent {

  constructor(
    private categoryService: CategoriesService,
    private fb: NonNullableFormBuilder,
    private publicationService: PublicationService,
    private router: Router
    )
    {   }


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

      titulo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      category: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      photoInput: new FormControl('', [Validators.required])

    });
  }

  get titulo(){
    return this.form.controls['titulo'];
  }

  get descripcion(){
    return this.form.controls['descripcion'];
  }

  get category(){
    return this.form.controls['category'];
  }

  get type(){
    return this.form.controls['type'];
  }

  get photoInput(){
    return this.form.controls['photoInput'];
  }




    // VERIFY LETTERS
    verifyLetter(campo: string): boolean {
      const patron: RegExp = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
      return patron.test(campo);
    }


    getIdCategoria(categoria: string): number {
      let id = 0;
      if (this.categories && this.categories.length > 0) {
        this.categories.forEach(element => {
          if (element.nombre === categoria) {
            id = element.id_categoria;
          }
        });
      }
      return id;
    }

    esSolicitud(type: string): boolean {
      if (type === 'Necesidad') {
        return true;
      } else {
        return false;
      }
    }






  onSubmit( formdata: any) {

    console.log(formdata);

    let itsOk = true;

    if(formdata.titulo.length < 3 || formdata.titulo.length > 35){
      this.classTitle = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.classTitle = 'form-control fondo is-valid';
    }

    if(formdata.descripcion.length < 3 || formdata.descripcion.length > 205){
      this.descriptionClass = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.descriptionClass = 'form-control fondo is-valid';
    }

    if(formdata.category == ''){
      this.categoryClass = 'form-select form-select-sm mb-3 textoptions is-invalid';
      itsOk = false;
    }else{
      this.categoryClass = 'form-select form-select-sm mb-3 textoptions is-valid';
    }

    if(formdata.type == ''){
      this.typeClass = 'form-select form-select-sm mb-3 textoptions is-invalid';
      itsOk = false;
    }else{
      this.typeClass = 'form-select form-select-sm mb-3 textoptions is-valid';
    }

    if(formdata.photoInput == ''){
      this.typeClass = 'form-select form-select-sm mb-3 textoptions is-invalid';
      console.log('photo');
      itsOk = false;
    }else{
      this.typeClass = 'form-select form-select-sm mb-3 textoptions is-valid';
    }












    if(itsOk){
      console.log('its ok');

      const id_categoria = this.getIdCategoria(formdata.category);

      const es_solicitud = this.esSolicitud(formdata.type);

      const filePath: string = formdata.photoInput;
      const fileName: string = filePath.split('\\').pop() || '';
      const imagePath: string = '../../assets/images/' + fileName;

      console.log(formdata.titulo, formdata.descripcion, id_categoria, es_solicitud, imagePath);


      this.publicationService.postPublication(formdata.titulo, formdata.descripcion, id_categoria, es_solicitud, imagePath).subscribe(
        (data) => {
          if('type' in data && data.type == 'success'){
            this.router.navigate(['/necesidades']);
          }else if ('message' in data) {
            console.log(data.message);
          }
        }
      );


    }else{
      this.subbmited = false;
      console.log('its not ok');
    }








}


}
