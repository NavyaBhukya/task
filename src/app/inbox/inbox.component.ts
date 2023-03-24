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
      "message":"This To Inform u That I am taking",
      "time":"5.33PM"
    },{
      "to":" Srija Katla",
      "subject":"Techical Issue",
      "message":"This To Inform u That Technical issue",
      "time":"4.03PM"
    },{
      "to":"Mahesh B",
      "subject":"Sick Leave",
      "message":"This To Inform u That sick leave",
      "time":"11.56AM"
    },{
      "to":"Pavan R",
      "subject":"Work from Home",
      "message":"This To Inform u That work from home",
      "time":"7.33PM"
    },{
      "to":"Raghu M",
      "subject":"Leave",
      "message":"This To Inform u That leave",
      "time":"9.20AM"
    }
  ]
}
