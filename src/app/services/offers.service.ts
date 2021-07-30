import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {


  offers: any [] = [
    { discount: 0.5, type: "Savings", gender: "Female", category: "Accounts" },
    { discount: 0.2, type: "Business", gender: "Male", category: "Accounts" },
    { discount: 0.3, type: "Current", gender: "Female", category: "Accounts" },
    { discount: 0.5, type: "Home Loan", gender: "Male", category: "Loans" },
    { discount: 0.3, type: "Car Loan", gender: "Female", category: "Loans" },
    { discount: 1.2, type: "International Card", gender: "Male", category: "Cards" },
    { discount: 0.8, type: "Domestic Card", gender: "Female", category: "Cards" }
  ]


  constructor() { }

  getOffers(_category?: string) {
    if (_category) {
      return this.offers.filter(offer => offer.category == _category)
    }
    return this.offers;
  }
}
