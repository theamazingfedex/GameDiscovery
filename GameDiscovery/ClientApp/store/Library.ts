import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface LibraryState {
  activeTitle: string;
}

interface SetActiveTitleAction { type: 'SET_ACTIVE_TITLE', selectedTitle: string; }

type KnownAction = SetActiveTitleAction;

export const actionCreators = {
  setActiveTitle: (chosenTitle: string): AppThunkAction<KnownAction> => (dispatch, getState) => dispatch({ type: 'SET_ACTIVE_TITLE', selectedTitle: chosenTitle })
}

export const reducer:Reducer<LibraryState> = (state: LibraryState, incomingAction: Action) => {
  const action = incomingAction as KnownAction;
  switch (action.type) {
  case 'SET_ACTIVE_TITLE':
    return { activeTitle: action.selectedTitle };
  default:
    // The following line guarantees that every action in the KnownAction union has been covered by a case above
    //const exhaustiveCheck:never = action;
  }

  // For unrecognized actions (or in cases where actions have no effect), must return the existing state
  //  (or default initial state if none was supplied)
  return state || { activeTitle: 'none' };
};