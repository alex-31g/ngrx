import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../../models/b.model';
import { BState } from './../../b.state';

// Import our actions 
import * as TutorialActions from './../../actions/b.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  // Section 1 - defining an observable named tutorials which we will later display in the template
  tutorials: Observable<Tutorial[]>;

  // Section 2 - accessing the store from ngrx within the constructor, and then selecting tutorial which is defined as a the property from app.module.ts in StoreModule.forRoot({}). This calls the tutorial reducer and returns the tutorial state.
  constructor(private store: Store<BState>) { 
		this.tutorials = store.select('tutorial');
	}
	
	// This will call our RemoveTutorial action and pass in the index
	delTutorial(index) {
		this.store.dispatch(new TutorialActions.RemoveTutorial(index))
	}

	ngOnInit() {}
	
}
