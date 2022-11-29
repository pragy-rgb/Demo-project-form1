import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
