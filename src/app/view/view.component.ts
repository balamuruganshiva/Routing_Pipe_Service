import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public id ;
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
   
    this.route.params.subscribe(data =>{
       console.log("Id",data.id);
       this.id = data.id;
    });
  }
  BacktoView(){
    this.router.navigate(['/service']);
  }

}
