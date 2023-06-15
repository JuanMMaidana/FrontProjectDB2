import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Publication } from '../components/entities/publication';
import { Question } from '../components/entities/questions';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const publications = [
      { id_publication: 1, title: 'Árbol caido', description: 'Buenas, la semana pasada hubo una tormenta y desafortunadamente cayo un rayo en el barrio y hizo que un arbol este en el medio de la calle, necesito ayuda para que alguien me ayude a sacarlo, muchas gracias!', date: '2020-01-01', type_publication: true, categories: 'Personal', habilities: 'Fueza', photos: '../../../assets/images/arbol2.jpg', state: 'Activo' },
      { id_publication: 2, title: 'Corte de pasto', description: 'Buenas, necesito que alguien me ayude a cortar el pasto de mi casa, muchas gracias!', date: '2020-01-01', type_publication: true, categories: 'Personal', habilities: 'Fueza', photos: '../../assets/images/cortapasto1.jpg', state: 'Activo' },
      { id_publication: 3, title: 'Corte de pasto', description: 'Buenas, necesito que alguien me ayude a cortar el pasto de mi casa, muchas gracias!', date: '2020-01-01', type_publication: true, categories: 'Personal', habilities: 'Fueza', photos: '../../assets/images/tsconfig.app.jpg', state: 'Activo' },
      { id_publication: 4, title: 'Carpintero', description: 'Hola! Era para informar que soy carpintero, y por un par de semanas tengo tiempo para ayudar o hacer alguna silla/mesa, quedo a la ordenes!', date: '2020-01-01', type_publication: true, categories: 'Carpintero', habilities: 'Sillas, Madera', photos: '../../assets/images/carpintero1.jpg', state: 'Activo' },
      { id_publication: 5, title: 'Carpintero', description: 'Hola! Era para informar que soy carpintero, y por un par de semanas tengo tiempo para ayudar o hacer alguna silla/mesa, quedo a la ordenes!', date: '2020-01-01', type_publication: true, categories: 'Carpintero', habilities: 'Sillas, Madera', photos: '../../assets/images/carpintero1.jpg', state: 'Activo' },
      { id_publication: 6, title: 'Carpintero', description: 'Hola! Era para informar que soy carpintero, y por un par de semanas tengo tiempo para ayudar o hacer alguna silla/mesa, quedo a la ordenes!', date: '2020-01-01', type_publication: true, categories: 'Carpintero', habilities: 'Sillas, Madera', photos: '../../assets/images/carpintero1.jpg', state: 'Activo' },
      { id_publication: 7, title: 'Carpintero', description: 'Hola! Era para informar que soy carpintero, y por un par de semanas tengo tiempo para ayudar o hacer alguna silla/mesa, quedo a la ordenes!', date: '2020-01-01', type_publication: true, categories: 'Carpintero', habilities: 'Sillas, Madera', photos: '../../assets/images/carpintero1.jpg', state: 'Activo' },
  ];

  const categories = [
    { id_category: 1, name: 'Carpintero' },
    { id_category: 2, name: 'Electricista' },
    { id_category: 3, name: 'Plomero' },
    { id_category: 4, name: 'Albañil' },
    { id_category: 5, name: 'Pintor' },
    { id_category: 6, name: 'Jardinero' },
    { id_category: 7, name: 'Personal' },
    { id_category: 8, name: 'Otros' }
  ];


  const securityquestions: Question[] = [
    { id_question: 1, question: '¿Cuál es el nombre de tu mascota?' },
    { id_question: 2, question: '¿Cuál es el nombre de tu primer amor?' },
    { id_question: 3, question: '¿Cuál es el nombre de tu primer profesor?' },
    { id_question: 4, question: '¿Cuál es el nombre de tu primer mascota?' }
  ];

    return {publications, categories, securityquestions};
  }
}
