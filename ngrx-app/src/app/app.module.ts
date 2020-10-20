import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AComponent } from './components/a/a.component';

// =3= Импорт StoreModule и counterReducer
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/a/a.reducer';

@NgModule({
	declarations: [
		AppComponent,
		AComponent
	],
	
	// =4= Добавьте функцию StoreModule.forRoot в imports. 
	// Метод StoreModule.forRoot() регистрирует глобальных поставщиков, необходимых для доступа к Store во всем приложении.
	imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({ count: counterReducer })],
	
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
