import { Component, OnInit } from '@angular/core';
import { EntityApiService } from '../entityapi.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  httpdata;

  constructor(
    private entityApiService: EntityApiService,

  ) { }

  ngOnInit() {
    this.refreshObjects('events');
  }


  displaydata(data) { 
    this.httpdata = data; 
  }

  refreshObjects(objName){
    this.entityApiService.retrieveEntityObjects(objName)
      .subscribe((httpdata) => this.displaydata(httpdata[objName]));

  }

}