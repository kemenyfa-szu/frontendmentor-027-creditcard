import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardFrontComponent } from './card-front/card-front.component';
import { CardBackComponent } from './card-back/card-back.component';
import { CardFormModule } from './card-form/card-form.module';
import { CardData } from './CardData';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [AppComponent, CardFrontComponent, CardBackComponent, ThankYouComponent],
  imports: [BrowserModule, CardFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
