import { Component, OnInit } from '@angular/core';
import { EntityApiService } from '../entityapi.service';


@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  httpdata;

  constructor(
    private entityApiService: EntityApiService,

  ) { }

  ngOnInit() {
    this.refreshObjects('interactions');
  }


  displaydata(data) { 
    this.httpdata = data; 
  }

  refreshObjects(objName){
    this.entityApiService.retrieveEntityObjects(objName)
      .subscribe((httpdata) => this.displaydata(httpdata[objName]));

  }

}

