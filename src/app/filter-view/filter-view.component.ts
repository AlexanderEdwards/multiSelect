import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-view',
  templateUrl: './filter-view.component.html',
  styleUrls: ['./filter-view.component.css']
})
export class FilterViewComponent implements OnInit {

  role:string;
  sex:string;

  data:Array<any> = [
    {name: "alex", age: 24, type: "student", sex: "male"}, 
    {name: "jack", age: 24, type: "student", sex: "female"}, 
    {name: "sam", age: 24, type: "teacher", sex: "male"}, 
    {name: "smith", age: 24, type: "teacher", sex: "female"}
  ];

  list:Array<any>;

  constructor() { }

  ngOnInit() {
    this.list = this.data;
  }

  filterList():void{
    this.list = this.data.filter((item)=>{
      if(!this.role && this.sex ){
        return item.sex == this.sex;
      } else if(!this.sex  && this.role) {
        return item.type == this.role
      } else {
        return item.type == this.role && 
               item.sex == this.sex;
      }
    });
  }
}
