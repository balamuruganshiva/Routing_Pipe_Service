import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharepoc';
  public user:Array<any>;
  
  ngOnInit(){
      this.user = [{name:"Bala",age:28,sal:10000},
      {name:"Murugan",age:23,sal:5000},
      {name:"Balamurugan",age:27,sal:20000}];
  }
  saveUser(user){
    this.user.push({name:user.name,age:user.age,sal:user.salary});
  }
}
