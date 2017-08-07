import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';

import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { Item1Component } from './drag-drop/items/item1/item1.component';
import { Item2Component } from './drag-drop/items/item2/item2.component';
import { Item3Component } from './drag-drop/items/item3/item3.component';

@NgModule({
  declarations: [
    AppComponent, DragDropComponent, Item1Component, Item2Component, Item3Component
  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, DragDropComponent]
})
export class AppModule { }
