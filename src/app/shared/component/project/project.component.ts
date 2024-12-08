import { Component } from "@angular/core";


@Component({
  selector : "app-project",  
  templateUrl : "./project.component.html",
  
})

export class ProjectComponent {
    skillsArray : Array<string> = ['HTML', 'CSS 3', 'JS', 'Angular 14', 'Angular 18']
}