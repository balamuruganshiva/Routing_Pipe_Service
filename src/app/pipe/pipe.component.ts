import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  strVal : string;
  constructor() { }

  ngOnInit() {
    this.strVal = "bala murugan";
  }

}
