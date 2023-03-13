import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
tasks:{title: string; completed: boolean}[]=
[
  {title:"Tender la cama", completed: false},
  {title:"Lavar los platos", completed: false},
  {title:"Hacer deberes", completed: true},
]
newTask='';
 
 addTask(){
  if(this.newTask.trim(), length === 0){//trim elimina espacios repetidos / === es que tiene que ser exactamente el valor que se da
    return;
  }
  this.tasks.push({title:this.newTask,completed:false})
  this.newTask = '';
 }
 deleteTask(task: {title: string; completed:boolean}){
  const index = this.tasks.indexOf(task);
  this.tasks.splice(index,1);

 }


  constructor() { }

  ngOnInit() {
  }

}
