import { Component, EventEmitter, Output } from '@angular/core';
import { BooksService } from '../../_services/books.service';

@Component({
    selector: 'app-bookstore-searchbar',
    templateUrl: 'searchBar.component.html',
    styleUrls: ['searchBar.component.css']
})
export class SearchBarComponent {
    @Output() searchBook = new EventEmitter<string>();

    private book: string;
    constructor(private bookServ: BooksService) {}

    private search(): void {
        if (this.book) {
            // console.log(this.book);
            // this.bookServ.setBook(this.book);
            this.searchBook.emit(this.book);
        }
    }

}
