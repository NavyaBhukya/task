import { Component } from '@angular/core';
import { DataServeiceService } from '../data-serveice.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  opened = true;
  displayPosition: boolean | undefined;
  position!: string;

  constructor(public dataService: DataServeiceService, private fb: FormBuilder) { }
  ngOnInit(): void {

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
  createForm = new FormGroup({
    to: new FormControl("", [Validators.required]),
    subject: new FormControl("", [Validators.required,]),
    message: new FormControl("", [Validators.required,])

  })
 formValid() {
    if (this.createForm.valid) {
      console.log(this.createForm.value);
      this.dataService.sentData(this.dataObj)

      this.displayPosition = false

      this.dataObj = {
        to: '',
        subject: '',
        message: ''
      }
      alert("Message Sent")

    } else {
      console.log('this is invalid input')
      alert("Please Enter required Details!")
    }
  }

}

function sendMail(data: any, arg1: { value: { to: any; subject: any; message: any; }; }) {
  throw new Error('Function not implemented.');
}