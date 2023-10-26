import { Injectable } from '@angular/core';
import { List } from './List';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoctdataService {

  private tasks:List[]=[
    {id:1,task:"forzen egg"},
    {id:2,task:"cook food"},
    {id:3,task:"visit mother"}
  ]
  newData:List[]=[]

  // private tasksSub = new BehaviorSubject([]);
  
  constructor() { }

  getData(value:List){
    this.tasks.push(value)
  }

  sendTheData(){
    return this.tasks
  }

  removeData(id:number){
    this.tasks=this.tasks.filter((t) => t.id!=id)
    return this.tasks
  }
}
