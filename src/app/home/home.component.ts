import { Component,EventEmitter,Input, Output } from '@angular/core';
import { MoctdataService } from '../moctdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() userName:string='';

  constructor(private mS:MoctdataService){}

  sendTheData():void{
    // console.log(this.userName)
    // this.sendTheData.length
    this.mS.getData({id:this.sendTheData.length,task:this.userName})
    this.userName=''
  }
}
