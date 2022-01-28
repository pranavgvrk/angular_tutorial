import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemComponent } from './media-item.component';
// import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MediaItemComponent, MediaItemListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
