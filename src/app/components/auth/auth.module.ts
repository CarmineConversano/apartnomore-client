import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {FormLayoutComponent} from './form-layout/form-layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MdbCheckboxModule, MdbFormsModule, MdbValidationModule} from "mdb-angular-ui-kit";
import {authRouting} from "./auth.routing";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    FormLayoutComponent
  ],
  exports: [
    FormLayoutComponent
  ],
    imports: [
        authRouting,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MdbCheckboxModule,
        MdbValidationModule,
        MdbFormsModule,
        LeafletModule
    ]
})
export class AuthModule {
}
