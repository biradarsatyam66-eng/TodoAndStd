import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoFourIoDashboardComponent } from './components/todo-four-io-dashboard/todo-four-io-dashboard.component';
import { TodoFourIoFormComponent } from './components/todo-four-io-dashboard/todo-four-io-form/todo-four-io-form.component';
import { TodoFourIoListComponent } from './components/todo-four-io-dashboard/todo-four-io-list/todo-four-io-list.component';
import { StdFourIoTableComponent } from './components/std-four-io-dashboard/std-four-io-table/std-four-io-table.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { StdFourIoDashboardComponent } from './components/std-four-io-dashboard/std-four-io-dashboard.component';
import { StdFourIoFormComponent } from './components/std-four-io-dashboard/std-four-io-form/std-four-io-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFourIoDashboardComponent,
    TodoFourIoFormComponent,
    TodoFourIoListComponent,
    StdFourIoTableComponent,
    StdFourIoDashboardComponent,
    StdFourIoFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
