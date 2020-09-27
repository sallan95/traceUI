import { Component, OnInit } from '@angular/core';
import { EntityApiService } from '../entityapi.service';


@Component({
  selector: 'app-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.css']
})
export class RisksComponent implements OnInit {

  httpdata;

  constructor(
    private entityApiService: EntityApiService,

  ) { }

  ngOnInit() {
    this.refreshObjects('risks');
  }


  displaydata(data) { 
    this.httpdata = data; 
  }

  refreshObjects(objName){
    this.entityApiService.retrieveEntityObjects(objName)
      .subscribe((httpdata) => this.displaydata(httpdata[objName]));

  }

}
