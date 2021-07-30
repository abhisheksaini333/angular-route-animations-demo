import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadeInAnimation';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],

  animations: [fadeInAnimation],
  host: {
    '[@fadeInAnimation]': ''
  }

})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
