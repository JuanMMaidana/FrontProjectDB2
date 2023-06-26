import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { PublicationService } from 'src/app/services/publication.service';
import { Publication } from '../entities/publication';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private tokenService: TokenService, private userService: UserService, private publicationService: PublicationService) { }
  publications: Publication[] = [];
  user = {
    id_user: 1,
    nombre: '',
    apellidos: '',
    email: '',
    direccion: ''
  }

  ngOnInit(): void {
    this.getProfile();
    this.getPublications();
  }

  getProfile(){
    if (this.tokenService.getToken()) {
      this.userService.getProfile().subscribe(res => {this.user = res[0]; console.log(res);})
    }
  }

  getPublications(){
    if (this.tokenService.getToken()) {
      this.publicationService.getPublicationsByUser().subscribe(res => {this.publications = res; console.log(res);})
    }
  }
}
