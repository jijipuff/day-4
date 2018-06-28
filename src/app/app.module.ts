import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage} from '../pages/registration/registration'
import { LoginPage} from '../pages/login/login'
import { ProfilePage} from '../pages/profile/profile'
import { ProductsPage } from '../pages/products/products'
import { Sloth1Page } from '../pages/sloth1/sloth1'
import { Sloth2Page } from '../pages/sloth2/sloth2'
import { Sloth3Page } from '../pages/sloth3/sloth3'
import { Sloth4Page } from '../pages/sloth4/sloth4'
import { Sloth5Page } from '../pages/sloth5/sloth5'
import { PaymentPage } from '../pages/payment/payment'
import { HistoryPage } from '../pages/history/history'
import { SavePage } from '../pages/save/save'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    ProductsPage,
    Sloth1Page,
    Sloth2Page,
    Sloth3Page,
    Sloth4Page,
    Sloth5Page,
    PaymentPage,
    HistoryPage,
    SavePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    ProductsPage,
    Sloth1Page,
    Sloth2Page,
    Sloth3Page,
    Sloth4Page,
    Sloth5Page,
    PaymentPage,
    HistoryPage,
    SavePage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
