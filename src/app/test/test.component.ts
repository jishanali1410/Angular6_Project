import { Component, OnInit, Input } from '@angular/core';

@Component({
 // selector: '.app-test',
 selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Amber gautam";
  public site_url = window.location.href;
  public testId = "myid";
  public test_class = "test_class";
  public hasError = true;
  public color = "sky";
  public colors = ["red","blue","green","yellow"];
  public greeting = "";
  public messageclass  = {
    "test_class" :  this.hasError,
    "testdanger" : this.hasError
  }

  public jsonobject = {
    "name" : "amber",
    "lastname": "gautam"
  }
  public date = new Date();
  @Input() public parentData;


  //two way binding
  public uname ="";

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
