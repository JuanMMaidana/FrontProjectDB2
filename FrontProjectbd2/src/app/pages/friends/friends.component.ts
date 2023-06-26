import { Component } from '@angular/core';
import { Publication } from 'src/app/components/entities/publication';
import { PublicationService } from 'src/app/services/publication.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {


  constructor(private publicationService: PublicationService) { }

  publications: Publication[] = [];

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications(){
    this.publicationService.getPublicationsFriends().subscribe(res => {this.publications = res; console.log(res);})
  }




}
