import { Component } from '@angular/core';
import { CountState } from './reducers/count/count.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectUpdatedAt } from './reducers/count/count.selectors';
// import { CountClearAction, CountDecreaseAction, CountIncreaseAction } from './reducers/count/count.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  // public disableDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

  constructor(private store$: Store<CountState>) {
  }

  Increase() {
    // this.store$.dispatch(new CountIncreaseAction());
  }

  Decrease() {
    // this.store$.dispatch(new CountDecreaseAction());
  }

  Clear() {
    // this.store$.dispatch(new CountClearAction());
  }
}
