import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, MatFormFieldModule, MatInputModule],
  imports: [BrowserModule, FormsModule, HttpClientModule, RegisterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
