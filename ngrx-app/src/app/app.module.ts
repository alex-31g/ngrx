import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

// =3= Импорт StoreModule и counterReducer
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/a/a.reducer';

import { B_Reducer } from './components/b/reducers/b.reducer';
import { ReadComponent } from './components/b/components/read/read.component';
import { CreateComponent } from './components/b/components/create/create.component'

@NgModule({
	declarations: [
		AppComponent,
		AComponent,
		BComponent,
		ReadComponent,
		CreateComponent
	],
	
	// =4= Добавьте функцию StoreModule.forRoot в imports. 
	// Метод StoreModule.forRoot() регистрирует глобальных поставщиков, необходимых для доступа к Store во всем приложении.
	imports: [
		BrowserModule, 
		AppRoutingModule, 
		StoreModule.forRoot({ 
			count: counterReducer,
			tutorial: B_Reducer
		})
	],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
