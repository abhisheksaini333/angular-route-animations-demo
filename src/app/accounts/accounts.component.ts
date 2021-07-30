import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideOutAnimation } from '../animations/slideOutAnimation';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],

  animations: [slideOutAnimation],
  host: { 
    '[@slideOutAnimation]': ''
  }
})
export class AccountsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  showAccountOffers() {
    // (1) I need to pass parameter to the offers component, category: Accounts
    // (2) offers component can be displayed as a child component for the accounts - done
    const queryParams = {
        category: 'Accounts',
    }
    this._router.navigate(['/accounts/offers'], { queryParams })
  }

  donload() {

  }

}
