import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { SecurityQuestionsService } from 'src/app/services/security-questions.service';
import { Question } from '../entities/questions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private securityQuestions :SecurityQuestionsService, private formBuilder: FormBuilder) {

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










  async ngOnInit(): Promise<void> {

    this.getQuestions();

    console.log(this.questions);

      this.form = this.formBuilder.group({
      ciClass: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]],
      names: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      question: ['', [Validators.required]],
      response: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
   });
  }


  async getQuestions() {
    this.securityQuestions.getSecurityQuestions().subscribe(question => {
    this.questions = question
    });
  }





  get ciClass() {
    return this.form.controls['ciClass'];
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

  get password() {
    return this.form.controls['password'];
  }

  get confirmPassword() {
    return this.form.controls['confirmPassword'];
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



  async onSubmit(formdata: any) {
    let itsOk = true;
    console.log(this.form.value);


    if (this.verifyNumeric(formdata.ciClass) == false){
      this.ciIsValid = 'form-control fondo is-invalid';
      itsOk = false;
      console.log("ci invalido");
    }else{
      this.ciIsValid = 'form-control fondo is-valid';
    }

    if(this.verifyLetter(formdata.names) == false){
      this.nameIsValid = 'form-control fondo is-invalid';
      itsOk = false;
      console.log("nombre invalido");
    }else{
      this.nameIsValid = 'form-control fondo is-valid';
    }

    if(this.verifyLetter(formdata.surname) == false){
      this.surnameIsValid = 'form-control fondo is-invalid';
      itsOk = false;
      console.log("apellido invalido");
    }else{
      this.surnameIsValid = 'form-control fondo is-valid';
    }


    if(this.verifyEmail(formdata.email) == false){
      this.emailIsValid = 'form-control fondo is-invalid';
      itsOk = false;
      console.log("email invalido");
    }else{
      this.emailIsValid = 'form-control fondo is-valid';
    }

    if(formdata.password != formdata.confirmPassword || formdata.password.length < 8 || formdata.confirmPassword.length < 8){
      this.passwordIsValid = 'form-control fondo is-invalid';
      this.password2IsValid = 'form-control fondo is-invalid';
      itsOk = false;
      console.log("contraseñas no coinciden");
    }else{
      this.passwordIsValid = 'form-control fondo is-valid';
      this.password2IsValid = 'form-control fondo is-valid';
    }

    if(this.verifyLetter(formdata.response) == false){
      this.responseIsValid = 'form-control fondo is-invalid';
      itsOk = false;
      console.log("respuesta invalida");
    }else{
      this.responseIsValid = 'form-control fondo is-valid';
    }

    if(itsOk == true){
      console.log("todo ok");
    }else{
      console.log("todo mal");
    }










}


}
