import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NonNullableFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private formBuilder: FormBuilder) { }

  subbmitted = false;
  form!: FormGroup;


  emailIsValid: string = 'form-control fondo border';
  passwordIsValid: string = 'form-control fondo border';

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
   });
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }



    // VERIFY EMAIL
    verifyEmail(email: string): boolean {
      const patron: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return patron.test(email);
    }




  onSubmit(formdata: any) {

    let itsOk = true;

    if(!this.verifyEmail(formdata.email)){
      this.emailIsValid = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.emailIsValid = 'form-control fondo is-valid';
    }

    if(formdata.password.length < 8 || formdata.password.length > 30){
      this.passwordIsValid = 'form-control fondo is-invalid';
      itsOk = false;
    }else{
      this.passwordIsValid = 'form-control fondo is-valid';
    }

    if(itsOk){
      console.log(formdata);
    }
    else{
      console.log("Error en el formulario");
    }


  }

}
