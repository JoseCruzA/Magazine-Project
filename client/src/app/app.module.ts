import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./landing/header/header.component";
import { HomeComponent } from "./landing/home/home.component";
import { FooterComponent } from "./landing/footer/footer.component";
import { CarouselComponent } from "./landing/carousel/carousel.component";
import { TemporalComponent } from "./landing/temporal/temporal.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    TemporalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgxCaptchaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
