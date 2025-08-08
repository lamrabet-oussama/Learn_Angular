import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  addBook(book:Book):Observable<Book>{
    return of(book);
  }
}
