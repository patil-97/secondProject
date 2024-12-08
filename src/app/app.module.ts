import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectComponent } from './shared/component/project/project.component';
import { StudentsComponent } from './shared/component/students/students.component';

@NgModule({
  declarations: [AppComponent, ProjectComponent,StudentsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
