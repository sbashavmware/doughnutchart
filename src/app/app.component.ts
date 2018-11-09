import { Component } from '@angular/core';
import { GetIncidentsService } from './service/get-incidents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  single: any[];
  multi: any[];

  title="";

  view: any[] = [300, 300];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#003E79', '#E0F1F6', 'A6D8E7', '#49AFD9','#0179B8','004D8A','#F5A623']
  };

  // pie
  showLabels = false;
  explodeSlices = true;
  doughnut = true;
  incidentData = {};

  constructor(private getIncidentsService : GetIncidentsService) {
  }


  ngOnInit(){
    this.getIncidentsService.getJSON().subscribe( incdata => {
        this.title = incdata.title;
        this.incidentData = incdata.data;
     });

     setInterval(() => {
      this.getIncidentsService.getJSON().subscribe(incdata => {
        this.title = incdata.title;
        this.incidentData =[...incdata.data];
     });

     }, 5000);
  }


  onSelect(event) {
    console.log(event);
  }


}

