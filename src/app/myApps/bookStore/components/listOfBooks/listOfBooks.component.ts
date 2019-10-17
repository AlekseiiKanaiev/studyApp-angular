import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BooksService } from '../../_services/books.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
    selector: 'app-bookstore-list-of-books',
    templateUrl: 'listOfBooks.component.html',
    styleUrls: ['listOfBooks.component.css']
})
export class ListOfBooksComponent implements OnInit {
    @Input() bookList: string[];
    private modalRef: BsModalRef;

    constructor(private modalServ: BsModalService) {}

    ngOnInit() {
        // this.bookServ.getBooks().subscribe(
        //     (res) => this.booklist = res
        // );
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalServ.show(template);
      }
}
