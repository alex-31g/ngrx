// Section 1 - importing our Tutorial model and Action from ngrx/store
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/b.model'

// Section 2 - defining the type of action
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

// Section 3 - creating a class for each action with a constructor that allows us to pass in the payload. This isn't a required step, but it does provide you with strong typing
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

// Section 4 - exporting all of our action classes for use within our reducer
export type Actions = AddTutorial | RemoveTutorial