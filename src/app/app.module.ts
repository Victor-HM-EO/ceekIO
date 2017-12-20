import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';
import { TermsPageModule } from '../pages/terms/terms.module'; 
import { PhotoUpPageModule } from '../pages/photo-up/photo-up.module';
import { ResetPassPageModule } from '../pages/reset-pass/reset-pass.module';
import { ResetComfPageModule } from '../pages/reset-comf/reset-comf.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    SignUpPageModule,
    TermsPageModule,
    PhotoUpPageModule,
    ResetPassPageModule,
    ResetComfPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
