import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {
  title: string = 'ng-app';
  date = Date.now();
  products = [
    {
      'name': 'Product1',
      'price': 12,
    },
    {
      'name': 'Product2',
      'price': 12,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  isBtnDisabled(): boolean {
    return true;
  }

  btnClic(event) {
    alert('Hello!');
  }

  getObjectClassesFromArray(): string[] {
    let classes = new Array();
    if (true)
      classes.push('class1');
    if (true)
      classes.push('class2');
    console.log(classes);
    return classes;
  }

  getObjectClasses(): {} {
    return {
      'class1': true,
      'class2': false
    }
  }

}
