import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {LoginService} from './login/login.service';
import {CalculService} from './shared/services/calcul.service';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {UserService} from './user/user.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        AngularFontAwesomeModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, LoginService, CalculService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {}
