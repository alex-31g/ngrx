import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BState } from './../../b.state';
import { Tutorial } from './../../models/b.model'
import * as TutorialActions from './../../actions/b.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<BState>) {}

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  ngOnInit() {
  }

}
