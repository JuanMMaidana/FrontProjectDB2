import { Component, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Publication } from '../entities/publication';
import { UserFront } from '../entities/userFront';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.css']
})
export class ModalContactComponent {
  constructor(private activeModal: NgbActiveModal, private userService: UserService) { }

  public usuarioSigue = false;

  @Input() publication?: Publication;
  @ViewChild('formSwitch') formSwitch: any;

  ngOnInit(): void {
    this.friendState();
    console.log(this.publication);
  }

  friendState() {
    this.userService.postFriendState(this.publication!.ci).subscribe(
      (response: boolean) => {
        this.usuarioSigue = response;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  followFriend() {
    const friendbool = !this.usuarioSigue; // Invertir el valor actual de usuarioSigue

    this.userService.postFollowFriend(this.publication!.ci, friendbool).subscribe(
      (response: any) => {
        this.usuarioSigue = friendbool; // Actualizar el valor de usuarioSigue con el nuevo estado
        console.log(this.usuarioSigue);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  modalClose() {
    this.activeModal.close();
  }
}
