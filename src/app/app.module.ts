import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DefaultContentComponent } from './default-content/default-content.component';
import { MealContentComponent } from './meal-content/meal-content.component';
import { AddContentComponent } from './add-content/add-content.component';
import { AppRounting } from 'src/app/app-rounting.module';
import { ProductItemComponent } from 'src/app/default-content/product-item/product-item.component';
import { FresherComponent } from './fresher/fresher.component';
import { ProductService }from './default-content/ProductService.service';
import { DatastorageService } from 'src/app/shared/datastorage.service';
import { SignUpComponent } from 'src/app/Account/sign-up/sign-up.component';
import { AcountService } from 'src/app/Account/Acount.service';
import { SignInComponent } from 'src/app/Account/sign-in/SignIn.component';
import { ShoppingCartComponent } from 'src/app/Account/shopping-cart/shopping-cart.component';
import { AccountComponent } from 'src/app/Account/Account.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultContentComponent,
    MealContentComponent,
    AddContentComponent,
    ProductItemComponent,
    FresherComponent,
    SignUpComponent,
    SignInComponent,
    ShoppingCartComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRounting,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [ProductService,DatastorageService,AcountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
