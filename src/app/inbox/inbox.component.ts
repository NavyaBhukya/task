import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  
  sentDataArray = [
    {
      "to":"Navya Bhukya",
      "subject":"About Leave",
      "message":"This To Inform u That I am taking"
    },{
      "to":" Srija Katla",
      "subject":"Techical Issue",
      "message":"This To Inform u That Technical issue"
    },{
      "to":"Mahesh B",
      "subject":"Sick Leave",
      "message":"This To Inform u That sick leave"
    },{
      "to":"Pavan R",
      "subject":"Work from Home",
      "message":"This To Inform u That work from home"
    },{
      "to":"Raghu M",
      "subject":"Leave",
      "message":"This To Inform u That leave"
    }
  ]
}
