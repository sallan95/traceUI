import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { HouseholdComponent } from './household/household.component';
import { RisksComponent } from './risks/risks.component';
import { PeopleComponent } from './people/people.component';
import { EventComponent } from './event/event.component';
import { InteractionComponent } from './interaction/interaction.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'households', component: HouseholdComponent },
      { path: 'risks', component: RisksComponent },
      { path: 'people', component: PeopleComponent},
      { path: 'events', component: EventComponent},
      { path: 'interactions', component: InteractionComponent},
    ])
  ],
  declarations: [					
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CartComponent,
    HouseholdComponent,
    RisksComponent,
    PeopleComponent,
    EventComponent,
    InteractionComponent,
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/