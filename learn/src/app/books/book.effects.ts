import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from './book.actions';
import { BooksService } from "../services/books/books.service";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class BookEffects{

    constructor(private actions$:Actions, private booksService:BooksService){}

    addBook$=createEffect(()=>this.actions$.pipe(
        ofType(bookActions.AddBook),
        mergeMap((property)=>this.booksService.addBook(property).pipe(
            map((book)=>bookActions.AddBookSuccess(book)),
            catchError((error)=> of(bookActions.AddBookFailure({error}))
        ))
    ))
    )
}