import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Publication } from '../entities/publication';
import { UserFront } from '../entities/userFront';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.css']
})
export class ModalContactComponent {


  constructor(private activeModal: NgbActiveModal) { }

  @Input() publication?: Publication;




  modalClose() {
    this.activeModal.close();
  }




}
