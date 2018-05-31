import { Component, OnInit } from '@angular/core';

@Component({
 // selector: '.app-test',
 selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Amber";
  public site_url = window.location.href;
  public testId = "myid";
  public test_class = "test_class";
  public hasError = true;
  public greeting = "";
  public messageclass  = {
    "test_class" :  this.hasError,
    "testdanger" : this.hasError
  }

  constructor() { }

  ngOnInit() {
  }
  greetUser()
  {
    return this.name;
  }
  onClick()
  {
    console.log("welcome to my planet");
    this.greeting = "Hello amber gautam";
  }
  logmessage(value){
    console.log(value);
  }


}
