import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  src: string = 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg';
  name: string = 'Clean Code';
  author: string = 'Robert C Martin'

  src2: string = 'https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg';
  name2: string = 'Pragmatic programmer';
  author2: string = 'David Thomas'

  isDisabled: boolean = false;

  ngOnInit(): void {
  }

  handleClick() {
    this.isDisabled = true;
  }
}
