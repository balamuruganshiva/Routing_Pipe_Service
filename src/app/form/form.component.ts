import { Component, OnInit,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() userEvent = new EventEmitter<object>();
  constructor() { }
  
  
  submit(name:HTMLInputElement,age:HTMLInputElement,salary:HTMLInputElement){
    this.userEvent.emit({name:name.value, age:age.value, salary:salary.value});
  }
  ngOnInit() {
  }

}
