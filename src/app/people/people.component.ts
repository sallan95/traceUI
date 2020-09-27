import { Component, OnInit } from '@angular/core';
import { EntityApiService } from '../entityapi.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  httpdata;

  constructor(
    private entityApiService: EntityApiService,

  ) { }

  ngOnInit() {
    this.refreshObjects('peoples');
  }


  displaydata(data) { 
    this.httpdata = data; 
  }

  refreshObjects(objName){
    this.entityApiService.retrieveEntityObjects(objName)
      .subscribe((httpdata) => this.displaydata(httpdata[objName]));

  }

}