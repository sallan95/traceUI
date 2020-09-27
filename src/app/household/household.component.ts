import { CartService } from './../cart.service';
import { Household } from './household';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.css']
})

export class HouseholdComponent implements OnInit {

  household: Household;
  households: Household[];
  x: JSON;

  title = 'frontend';
  httpdata;

  constructor(
    private cartService: CartService,
    private http: HttpClient

  ) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/houseTester')
    .subscribe((httpdata) => this.displaydata(httpdata));
  }
  displaydata(data) { this.httpdata = data; }
  // ngOnInit() {
  //   // this.households = this.refreshHouseholds();
  //   this.refreshHouseholds();
  // }

  refreshHouseholds(){
    this.cartService.retrieveAllHouseholds().subscribe(
      (json: JSON) => {
        console.log();
        // this.households = response.households as Household[];
        this.x = json;
       }
     );
  }

}
