// @flow
import { ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY, SET_LIBRARY } from '../actions/library';
import type { GetState, Action } from './types';

const initialState = {
  allGames: []
};
export default function addToLibrary(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_TO_LIBRARY:
      const path = action.data.path;
      const title = action.data.title;
      const description = action.data.description;
      const executableName = action.data.executableName;
      const tempState = {
        allGames: [
          ...state.allGames,
          {
            path,
            title,
            description,
            executableName
          }
        ]
      };
      return Object.assign(state, tempState);;
    case REMOVE_FROM_LIBRARY:
      return newState;
    case SET_LIBRARY:
      const libraryToSet = action.data.library;
      return {...state, library: libraryToSet};
    default:
      return state;
  }
}

