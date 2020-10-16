import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// =3= Импорт StoreModule и counterReducer
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './app.reducer';

@NgModule({
	declarations: [AppComponent],
	
	// =4= Добавьте функцию StoreModule.forRoot в imports. 
	// Метод StoreModule.forRoot() регистрирует глобальных поставщиков, необходимых для доступа к Store во всем приложении.
	imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
	
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
