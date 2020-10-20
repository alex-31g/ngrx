import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './a.actions';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
})
export class AComponent {

	count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
		// =5= Подключаем поток count$ к состоянию count хранилища
    this.count$ = store.select('count');
  }

	// =6= Методы увеличения, уменьшения и сброса, отправляя действия в магазин.
  increment() {
		// С помощью dispatch() происходит отправка action
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
