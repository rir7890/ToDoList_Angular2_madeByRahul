import { Component, Input, OnInit } from '@angular/core';
import { MoctdataService } from '../moctdata.service';
import { List } from '../List';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})

export class DisplayTaskComponent implements OnInit {
  @Input() Task?:string;
  DataTasks:List[]=[]
  constructor(
    private moctdataSrvice:MoctdataService
  ){}

    ngOnInit(): void {
      this.DataTasks=this.moctdataSrvice.sendTheData();
    }

    delete(id:number){
      this.DataTasks=this.moctdataSrvice.removeData(id);
    }
}
