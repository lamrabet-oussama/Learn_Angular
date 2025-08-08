import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { AddBook, RemoveBook } from 'src/app/books/book.actions';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books$:Observable<Book[]>;
constructor(private store:Store<AppState>){
this.books$=store.pipe(select('books'));
}

addBook(id:number,title:string,author:string){
  this.store.dispatch(AddBook({id,title,author}));
}

removeBook(bookId:number){
  this.store.dispatch(RemoveBook({bookId}));
}

}
