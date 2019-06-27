import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  user;
  error:string;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.user = [];
    this.error = "";
  }
  getUser(){
     this.data.getUsers().subscribe(data=>{ console.log(data);
      this.user=data});
  }
}
