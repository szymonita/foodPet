import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { UpperToolbarComponent } from './upper-toolbar/upper-toolbar.component';
import { LowerToolbarComponent } from './lower-toolbar/lower-toolbar.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';

import { LoginErrorMessageDialog } from './dialogs/login-error-message';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PetComponent } from './pet/pet.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddPetComponent } from './add-pet/add-pet.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpperToolbarComponent,
    LowerToolbarComponent,
    LoginErrorMessageDialog,
    ErrorPageComponent,
    PetComponent,
    CreateAccountComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
