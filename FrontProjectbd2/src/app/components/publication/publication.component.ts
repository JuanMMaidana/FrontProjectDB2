import { Component, Input, AfterViewInit } from '@angular/core';
import { Publication } from '../entities/publication';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalContactComponent } from '../modal-contact/modal-contact.component';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements AfterViewInit {
  constructor(private modalService: NgbModal) { }

  @Input() publication?: Publication;
  public fechaFormateada: string | undefined;

  ngAfterViewInit() {
    this.formatFecha();
  }

  async openModal() {
    const modalRef = this.modalService.open(ModalContactComponent, { centered: true, size: 'md', animation: true });
    modalRef.componentInstance.publication = this.publication;
  }

  private formatFecha() {
    if (this.publication) {
      const fecha = new Date(this.publication.fecha);
      this.fechaFormateada = fecha.toLocaleDateString();
    }
  }
}
