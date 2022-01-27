import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
// import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MediaItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
