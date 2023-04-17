import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @ts-ignore
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() {
    return new FormGroup({
      name: new FormControl(''),
      white_wine: new FormControl(0),
      red_wine: new FormControl(0),
      beer: new FormControl(0)
    });
  }

}
