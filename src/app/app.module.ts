import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, QuizzComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
