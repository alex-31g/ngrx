import { Tutorial } from './models/b.model';

export interface BState {
  readonly tutorial: Tutorial[];
}

// We will import this file within the components that we wish to access ngrx.