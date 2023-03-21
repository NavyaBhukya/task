import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServeiceService {

  constructor() { }

  dataArray: { to: string, subject: string, message: string }[] = [];
  sentData(dataObj: { to: string; subject: string; message: string; }): void {
    this.dataArray.push(dataObj)
  }

}
