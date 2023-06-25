import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { SecurityQuestionsService } from 'src/app/services/security-questions.service';
import { Question } from '../entities/questions';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private securityQuestions :SecurityQuestionsService, private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

  }

  questions : Question[] = [];
  subbmited = false;
  form!: FormGroup;



  //CLASES CSS

  ciIsValid: string = 'form-control fondo border';
  nameIsValid: string = 'form-control fondo border';
  surnameIsValid: string = 'form-control fondo border';
  emailIsValid: string = 'form-control fondo border';
  passwordIsValid: string = 'form-control fondo border';
  password2IsValid: string = 'form-control fondo border';
  questionIsValid: string = 'form-select form-select-sm mb-3 textoptions border';
  responseIsValid: string = 'form-control fondo border';
  direccionIsValid: string = 'form-control fondo border';








  async ngOnInit(): Promise<void> {

    this.getQuestions();

    console.log(this.questions);

      this.form = this.formBuilder.group({
        ci: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
      names: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      password2: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      question: ['', [Validators.required]],
      response: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
   });
  }


  async getQuestions() {
    this.securityQuestions.getSecurityQuestions().subscribe(question => {
    this.questions = question
    });
  }





  get ci() {
    return this.form.controls['ci'];
  }

  get names() {
    return this.form.controls['names'];
  }

  get surname() {
    return this.form.controls['surname'];
  }

  get email() {
    return this.form.controls['email'];
  }

  get direccion() {
    return this.form.controls['direccion'];
  }

  get password() {
    return this.form.controls['password'];
  }

  get password2() {
    return this.form.controls['password2'];
  }

  get question() {
    return this.form.controls['question'];
  }

  get response() {
    return this.form.controls['response'];
  }


  // VERFY NUMERIC
  verifyNumeric(input: string): boolean {
    const regex: RegExp = /^[0-9]+$/;
    return regex.test(input);
  }

  // VERIFY LETTERS
   verifyLetter(campo: string): boolean {
    const patron: RegExp = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    return patron.test(campo);
  }

  // VERIFY EMAIL
  verifyEmail(email: string): boolean {
    const patron: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);
  }


  getIdPregunta(pregunta: string): number {
    let id = 0;
    this.questions.forEach(element => {
      if (element.pregunta === pregunta) {
        id = element.id_pregunta;
      }
    });
    return id;
  }



  async onSubmit(formdata: any) {
    let itsOk = true;
    console.log(this.form.value);


    if (this.verifyNumeric(formdata.ci) == false){
      this.ciIsValid = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.ciIsValid = 'form-control fondo is-valid';
    }

    if(this.verifyLetter(formdata.names) == false){
      this.nameIsValid = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.nameIsValid = 'form-control fondo is-valid';
    }

    if(this.verifyLetter(formdata.surname) == false){
      this.surnameIsValid = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.surnameIsValid = 'form-control fondo is-valid';
    }


    if(this.verifyEmail(formdata.email) == false){
      this.emailIsValid = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.emailIsValid = 'form-control fondo is-valid';
    }

    if(formdata.direccion.length < 3){
      this.direccionIsValid = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.direccionIsValid = 'form-control fondo is-valid';
    }


    if(formdata.password != formdata.password2 || formdata.password.length < 8 || formdata.password2.length < 8){
      this.passwordIsValid = 'form-control fondo is-invalid';
      this.password2IsValid = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.passwordIsValid = 'form-control fondo is-valid';
      this.password2IsValid = 'form-control fondo is-valid';
    }

    if(this.verifyLetter(formdata.response) == false){
      this.responseIsValid = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.responseIsValid = 'form-control fondo is-valid';
    }


    if (itsOk) {
      console.log("todo ok");

      const id = this.getIdPregunta(formdata.question);

      console.log(formdata.ciClass, formdata.names, formdata.surname, formdata.email, formdata.direccion, formdata.password, formdata.confirmPassword, id, formdata.response)

      this.userService.postRegister(formdata.ci, formdata.names, formdata.surname, formdata.email, formdata.direccion, formdata.password, formdata.password2, id, formdata.response).subscribe(data => {
        if ('type' in data && data.type === 'success') {
          this.router.navigate(['/login']);
        } else if ('message' in data) {
          console.log(data.message);
        }
      });
    } else {
      console.log("todo mal");
    }











}


}
