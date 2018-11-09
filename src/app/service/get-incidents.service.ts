import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { of } from 'rxjs';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetIncidentsService {

  subrcibeTimer = interval(5000);
  data = [
    {
      "name": "Missing Incident",
      "value": 5
    },
    {
      "name": "Medical Incident",
      "value": 3
    },
    {
      "name": "Transport Incident",
      "value": 3
    },
    {
      "name": "Near Miss Incident",
      "value": 2
    },
    {
      "name": "Employee Incident",
      "value": 1
    },
    {
      "name": "Other Incident",
      "value": 1
    },
    {
      "name": "Approvals",
      "value": 2
    }
  ];

  incidentsData =  {
    title : ' 3 Open Incidents',
    data : {}
  };

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {

     // return this.http.get("./assets/incidents.json")
     this.subrcibeTimer.subscribe((val) => {
        this.data = this.getRandomData();
        this.incidentsData.data= this.data;
        of(this.incidentsData);
      });

     this.incidentsData.title = Math.floor(Math.random() * 20) + ' Open Incidents';
     this.incidentsData.data= this.data;
     return of(this.incidentsData);
  }

  public getRandomData() {
    this.data.forEach(dataObj => {
      dataObj.value =  Math.floor(Math.random() * 20);
    });
    return this.data;
  }
}
