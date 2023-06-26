import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NonNullableFormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private formBuilder: FormBuilder, private userService: UserService,private router: Router) { }

  subbmitted = false;
  form!: FormGroup;

  errorLogin: string | null = null;


  emailIsValid: string = 'form-control fondo border';
  passwordIsValid: string = 'form-control fondo border';

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ci: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
   });
  }

  get ci() { return this.form.get('ci'); }
  get password() { return this.form.get('password'); }




    // VERFY NUMERIC
    verifyNumeric(input: string): boolean {
      const regex: RegExp = /^[0-9]+$/;
      return regex.test(input);
    }




  onSubmit(formdata: any) {

    let itsOk = true;

    if(!this.verifyNumeric(formdata.ci)){
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
      console.log(formdata.ci, formdata.password);
      this.userService.postLogin(formdata.ci, formdata.password).subscribe(
        (data) => {
          if('type' in data && data.type === 'success') {
            this.router.navigate(['/necesidades']);
          }else {
            console.log('entro');
            this.errorLogin = 'Credenciales inválidas. Verifica tu usuario y contraseña.';

          }
        },
        (error) => {
          this.errorLogin = 'Se produjo un error al iniciar sesión. Por favor, inténtalo de nuevo.';
        }
      );

    }
    else{
      console.log("Error en el formulario");
    }


  }

}
