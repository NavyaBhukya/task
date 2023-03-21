import { Component } from '@angular/core';
import { DataServeiceService } from '../data-serveice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  opened = true;
  displayPosition: boolean | undefined;
  position!: string;

  constructor( public dataService:DataServeiceService) { }
  ngOnInit(): void {
    // const localData = localStorage.getItem('emailData');
    // if(localData != null){
    //   this.dataArray = JSON.parse(localData);
    // }
  }
  showModal() {

  }
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

  dataArray: { to: string, subject: string, message: string }[] = [];

  dataObj: { to: string, subject: string, message: string } = {
    to: '',
    subject: '',
    message: ''
  }
  onCloseDailog() {
    const notnull = document.getElementById('dialog-form');
    if (notnull != null) {
      notnull.style.display = 'none';
    }
  }

  
  

  sendMail(data: { value: { to: string; subject: string; message: string; }; }) {
    console.log(data);
    console.log(typeof(data));

    this.dataObj = {
      to: data.value.to,
      subject: data.value.subject,
      message: data.value.message
    }
    this.dataService.sentData(this.dataObj)
    // console.log(this.dataObj);

    // this.dataArray.push(this.dataObj);
  
    // localStorage.setItem('emailData', JSON.stringify(this.dataArray));
    this.displayPosition=false
    // this.mailForm.reser()
    this.dataObj ={
    to: '',
    subject: '',
    message: ''
    }

  }
}
