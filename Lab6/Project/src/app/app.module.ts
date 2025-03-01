import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [provideHttpClient()]
})
export class AppModule { }
