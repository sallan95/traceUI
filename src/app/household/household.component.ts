import { EntityApiService } from '../entityapi.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.css']
})

export class HouseholdComponent implements OnInit {

  httpdata;

  constructor(
    private entityApiService: EntityApiService,

  ) { }

  ngOnInit() {
    this.refreshObjects('households');
  }


  displaydata(data) { 
    this.httpdata = data; 
  }

  refreshObjects(objName){
    this.entityApiService.retrieveEntityObjects(objName)
      .subscribe((httpdata) => this.displaydata(httpdata[objName]));

  }

}
