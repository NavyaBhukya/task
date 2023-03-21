import { Component, DoCheck } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DataServeiceService } from '../data-serveice.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements DoCheck {
  currentTime: Date = new Date();
  sentDataArray: { to: string, subject: string, message: string }[] = [];

  constructor(public home: HomeComponent, public dataService: DataServeiceService) {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
  ngDoCheck(): void {
    this.getSentData();
  }
  ngOnInit() { 
    this.getSentData();
  }
  public getSentData(): void {
    this.sentDataArray = this.dataService.dataArray
  }

}
