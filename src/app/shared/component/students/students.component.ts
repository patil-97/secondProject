import { Component } from '@angular/core';
import { Istudents } from '../../models/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  stdArr : Array<Istudents> = [{ fname: 'john', lname: 'doe', age: 12 }, {fname: "may", lname : "doe", age : 8}, {fname : "june", lname : "doe", age : 10}];
}
