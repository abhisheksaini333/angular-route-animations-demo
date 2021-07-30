import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  availableOffers: any[];

  constructor(private _offersService: OffersService, private _activatedRoute: ActivatedRoute) { 
    this.availableOffers = _offersService.getOffers();
  }

  ngOnInit(): void {
    if (this._activatedRoute) {
      this._activatedRoute.queryParams.subscribe(params => {
        debugger
        const { category } = params;
        this.availableOffers = this._offersService.getOffers(category);
      })
    }
  }

}
