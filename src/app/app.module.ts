import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatModule } from './mat/mat.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FieldErrorDisplayComponent } from './pages/field-error-display/field-error-display.component';
import { LoginComponent } from './login/login.component';
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n', '.json');
// }


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    SignUpComponent,
    FieldErrorDisplayComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  //exports: [TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }