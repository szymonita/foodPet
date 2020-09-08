import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LoginComponent } from './components/login/login.component';
import { LoginErrorMessageDialog } from './dialogs/login-error-message';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PetComponent } from './components/pet/pet.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { TermsComponent } from './components/terms/terms.component';
import { CreatePetAccountComponent } from './components/create-pet-account/create-pet-account.component';
import { DataTermsComponent } from './components/data-terms/data-terms.component';
import { SpeciesFilterPipe } from './utils/pipes/species-filter.pipe';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BeginComponent } from './components/begin/begin.component';
import { ScanComponent } from './components/scan/scan.component';
import { LogoutComponent } from './components/logout/logout.component';


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
    AddPetComponent,
    TermsComponent,
    CreatePetAccountComponent,
    SpeciesFilterPipe,
    DataTermsComponent,
    ForgotPasswordComponent,
    BeginComponent,
    ScanComponent,
    LogoutComponent
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
    MatStepperModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
